const Stocks = require('../models/stocks');
const Orders = require('../models/orders');
const OrderDetails = require('../models/orderDetails')
const Finances = require('../models/finance');
const sequelize = require('../models/index'); 
const { QueryTypes } = require('sequelize');
const Items = require('../models/items');

require('dotenv').config();

const environment = process.env.ENVIRONMENT || 'sandbox';
const endpoint_url = environment === 'sandbox' ? 'https://api-m.sandbox.paypal.com' : 'https://api-m.paypal.com';


async function insertDataIntoTable(amount, storeId) {
     
    try {
         // Mettez à jour le champ 'revenus' de l'entité 'Finances' pour le magasin spécifié
        await Finances.update(
             { income: sequelize.literal(`income + ${amount}`) },
             { where: { store_id: storeId } }
        );

    } catch (error) {
        console.error(error)
        return false;
    }
}

async function insertDataIntoOrderDetails(element, order_id) {
    try {
        await OrderDetails.create({
            item_id: element.item_id,
            quantity: element.quantity,
            price_per_item: element.price,
            store_id: element.store_id,
            order_id: order_id
        });
    } catch (error) {
        console.error(error)
        return false;
    }
}

function get_access_token(){

    const client_id = process.env.CLIENT_ID;
    const client_secret = process.env.CLIENT_SECRET;

    const auth = `${client_id}:${client_secret}`
    const data = 'grant_type=client_credentials'

    return fetch(endpoint_url+'/v1/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(auth).toString('base64')}`
      }, 
      body: data
    })
    .then(res => res.json())
    .then(json => json )
  }

  function generate_random_uuid() {
    // Vous pouvez utiliser cette implémentation pour générer un UUID aléatoire.
    // Cela génère une chaîne de 36 caractères au format 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.
    // Les caractères 'x' sont remplacés par des chiffres hexadécimaux aléatoires (0-9, a-f),
    // et 'y' est remplacé par 8, 9, a, ou b.
    const characters = '0123456789abcdef';
    let uuid = '';
    for (let i = 0; i < 36; i++) {
        if (i === 8 || i === 13 || i === 18 || i === 23) {
            uuid += '-';
        } else if (i === 14) {
            uuid += '4'; // 4 in the 14th position (randomly chosen)
        } else if (i === 19) {
            uuid += characters[(Math.random() * 4) | 8]; 
        } else {
            uuid += characters[Math.floor(Math.random() * 16)];
        }
    }
    return uuid;
}

module.exports = {

    display: async (req, res) => {
        const id_store = req.params.id_store;
        try {
            if(id_store > 0){
                 const sqlQuery = `
                    SELECT DISTINCT
                        s.item_id, 
                        s.quantity, 
                        i.item_name, 
                        i.price,
                        i.url_photo
                    FROM 
                        "Stocks" AS s 
                    INNER JOIN 
                        "Items" AS i 
                    ON 
                        s.item_id = i.item_id
                    WHERE
                        s.store_id = ${id_store};
                `;
                const results = await sequelize.query(sqlQuery, { type: QueryTypes.SELECT });
                return res.status(200).json({'results': results});
            } else {
                 const sqlQuery = `
                     SELECT DISTINCT
                            s.item_id,
                            s.store_id, 
                            s.quantity,
                            i.item_name, 
                            i.price,
                            i.url_photo,
                            st.store_name  
                        FROM 
                            "Stocks" AS s 
                        INNER JOIN 
                            "Items" AS i 
                        ON 
                            s.item_id = i.item_id
                        LEFT JOIN  
                            "Stores" AS st
                        ON 
                            s.store_id = st.store_id ;
                `;
                const results = await sequelize.query(sqlQuery, { type: QueryTypes.SELECT });
                return res.status(200).json({'results': results});
            }
           
        } catch (error) {
            return res.status(401).json({ 'message': error });
        }
    },
    
    updatePriceQuantity: async (req, res) => {
        console.log(req)
        const id_edited = req.params.idToEdit;
        const { quantity, price } = req.body;  
        try {
            const articleFoundStocks = await Stocks.findOne({
                where: { item_id: id_edited}
            })
            const articleFoundItems = await Items.findOne({
                where: { item_id: id_edited}
            })
            if(articleFoundStocks && articleFoundItems){
                const updates = {};
                    if (price) {
                        updates.price = price;
                    }
                    if (quantity) {
                        updates.quantity = quantity;
                    }
                    await articleFoundStocks.update({ quantity: updates.quantity });
                    await articleFoundItems.update({ price: updates.price });
            } 
             return res.status(201).json({ 'results': 'Réussi' });
        } catch (error) {
            return res.status(401).json({'message': error})
        }
    },
    
    panier: async (req, res) => {
        const arrayOfIds = req.body.ids;
        let results = [];

        try {
            // Utilisez Promise.all pour exécuter toutes les requêtes SQL en parallèle
            await Promise.all(arrayOfIds.map(async (id) => {
                const sqlQuery = `
                    SELECT DISTINCT
                        s.item_id,
                        s.store_id, 
                        i.item_name, 
                        i.price,
                        i.url_photo,
                        st.store_name  
                    FROM 
                        "Stocks" AS s 
                    INNER JOIN 
                        "Items" AS i 
                    ON 
                        s.item_id = i.item_id
                    LEFT JOIN  
                        "Stores" AS st
                    ON 
                        s.store_id = st.store_id 
                    WHERE
                        s.item_id = ${id};
                `;
                const result = await sequelize.query(sqlQuery, { type: QueryTypes.SELECT });
                results.push(result); // Ajoutez le résultat au tableau results
            }));

            return res.status(201).json({ 'results': results });
        } catch (error) {
            return res.status(401).json({ 'message': error });
        }
    },
    
    payment: async (req, res) => {
        const { customer_id, amountPurchases, total_amount, arrayOfObject } = req.body;

        try {
            await Promise.all(arrayOfObject.map( async (element)=>{
                await insertDataIntoTable(amountPurchases[element.store_id], element.store_id);
            }));

            const orderDate = new Date();
            const newOrder = await Orders.create({
                customer_id: customer_id,
                order_date: orderDate,
                total_amount: total_amount
            });
            const orderId = newOrder.order_id;
          
            try{
                await Promise.all( arrayOfObject.map(async (element) => {
                    await insertDataIntoOrderDetails(element, orderId);
                }));
            } catch (err) {
                return res.status(401).json({'message': err})
            }
            return res.status(201).json({ 'results': 'success' });
        } catch (error) {
            return res.status(401).json({ 'message': error });
        }
    },

    paypal_function_create_order: async (req, res) => {
        import('node-fetch').then((nodeFetch) => {
            const fetch = nodeFetch.default;
            get_access_token()
            .then( access_token => {
                console.log(access_token.access_token)
                let order_data_json = {
                    'intent': req.body.intent.toUpperCase(),
                    'purchase_units': [
                        {
                            'amount': {
                                'currency_code': 'USD',
                                'value': req.body.value
                              }
                        }
                    ]
                };
                const data = JSON.stringify(order_data_json)
                fetch(endpoint_url+'/v2/checkout/orders', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': `Bearer ${access_token.access_token}`,
                        'PayPal-Request-Id': generate_random_uuid()
                    },
                    body: data
                })
                .then(res => res.json())
                .then(json => {
                    // res.send(json);
                    return res.status(200).json({'results': json})
                })
            })
            .catch(err => { 
                console.log(err); 
                return res.status(500).json({ 'message': err})
            })
        });
    },

    paypal_function_complete_order: async (req, res) => {
        get_access_token()
        .then( access_token => {
            fetch(endpoint_url+'/v2/checkout/orders' + req.body.order_id+'/'+req.body.intent, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${access_token}`
                }
            })
            .then(res => res.json())
            .then(json => {
                console.log(json)
                // res.send(json);
                return res.status(200).json({'results': json});
            })
        })
        .catch(err => { 
            console.log(err); 
            return res.status(500).json({ 'message': err})
        })
    }
}





