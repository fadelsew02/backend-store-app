const Stocks = require('../models/stocks');
const Orders = require('../models/orders');
const OrderDetails = require('../models/orderDetails')
const Finances = require('../models/finance');
const sequelize = require('../models/index'); 
const { QueryTypes } = require('sequelize');
const Items = require('../models/items');


async function insertDataIntoTable(montant, customer_id, total_amount, storeId) {
    const orderDate = new Date(); 
    try {
         // Mettez à jour le champ 'revenus' de l'entité 'Finances' pour le magasin spécifié
        await Finances.update(
             { revenus: sequelize.literal(`revenus + ${montant}`) },
             { where: { store_id: storeId } }
        );

        const newOrder = await Orders.create({
            store_id: storeId,
            customer_id: customer_id,
            order_date: orderDate,
            total_amount: total_amount
        });
        return newOrder;
    } catch (error) {
        console.error(error)
        return false;
    }
}

async function insertDataIntoOrderDetails(quantity, item_id, price_per_item, order_id) {
    try {
        await OrderDetails.create({
            item_id: item_id,
            quantity: quantity,
            price_per_item: price_per_item,
            order_id: order_id
        });
    } catch (error) {
        console.error(error)
        return false;
    }
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
        const { customer_id, montantsMagasins, total_amount, arrayOfObject } = req.body;
        const arrayOfIdsOrder = [];

        try {
          await Promise.all(arrayOfObject.map( async (element)=>{
            const result = await insertDataIntoTable(montantsMagasins[element.store_id], customer_id, total_amount, element.store_id);
            arrayOfIdsOrder.push(result.order_id);
          }));
          
          try{
                let index = 0;
                 await Promise.all( arrayOfObject.map(async (element) => {
                      await insertDataIntoOrderDetails(element.quantity, element.item_id, element.price, arrayOfIdsOrder[index]);
                      index++;
                  }));
          } catch (err) {
              return res.status(401).json({'messsage': err})
          }
            return res.status(201).json({ 'results': arrayOfIdsOrder });
        } catch (error) {
            return res.status(401).json({ 'message': error });
        }
    }
}


