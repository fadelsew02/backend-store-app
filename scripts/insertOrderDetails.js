const OrderDetails = require('../models/orderDetails'); // Assurez-vous que le chemin d'accès au modèle est correct


function randomNumber(start, end) {
    return Math.floor(Math.random()*(end - start + 1)) + start;
}


const insertOrderDetailsData = async () => {
    try {
        const startOrderId = 1;
        const endOredrId = 14;
        const startItemId = 1;
        const endItemId = 90;
        const otherStart = 1;
        const otherEnd = 20;
        
        const orderDetailData = [
            { 
                order_id: randomNumber(startOrderId,endOredrId), 
                item_id: randomNumber(startItemId,endItemId), 
                quantity: randomNumber(otherStart,otherEnd), 
                price_per_item: 9.99,
                store_id: 1
            },{ 
                order_id: randomNumber(startOrderId,endOredrId), 
                item_id: randomNumber(startItemId,endItemId), 
                quantity: randomNumber(otherStart,otherEnd), 
                price_per_item: 19.99,
                store_id: 2
            },{ 
                order_id: randomNumber(startOrderId,endOredrId), 
                item_id: randomNumber(startItemId,endItemId), 
                quantity: randomNumber(otherStart,otherEnd), 
                price_per_item: 29.99,
                store_id: 3
            },{ 
                order_id: randomNumber(startOrderId,endOredrId), 
                item_id: randomNumber(startItemId,endItemId), 
                quantity: randomNumber(otherStart,otherEnd), 
                price_per_item: 39.99,
                store_id: 4
            },{ 
                order_id: randomNumber(startOrderId,endOredrId), 
                item_id: randomNumber(startItemId,endItemId), 
                quantity: randomNumber(otherStart,otherEnd), 
                price_per_item: 49.99, 
                store_id: 5
            },{ 
                order_id: randomNumber(startOrderId,endOredrId), 
                item_id: randomNumber(startItemId,endItemId), 
                quantity: randomNumber(otherStart,otherEnd), 
                price_per_item: 59.99, 
                store_id: 6
            },{ 
                order_id: randomNumber(startOrderId,endOredrId), 
                item_id: randomNumber(startItemId,endItemId), 
                quantity: randomNumber(otherStart,otherEnd), 
                price_per_item: 69.99,
                store_id: 7 
            },{ 
                order_id: randomNumber(startOrderId,endOredrId), 
                item_id: randomNumber(startItemId,endItemId), 
                quantity: randomNumber(otherStart,otherEnd), 
                price_per_item: 79.99,
                store_id: 8
            },{ 
                order_id: randomNumber(startOrderId,endOredrId), 
                item_id: randomNumber(startItemId,endItemId), 
                quantity: randomNumber(otherStart,otherEnd), 
                price_per_item: 89.99,
                store_id: 9
            },{ 
                order_id: randomNumber(startOrderId,endOredrId), 
                item_id: randomNumber(startItemId,endItemId), 
                quantity: randomNumber(otherStart,otherEnd), 
                price_per_item: 99.99,
                store_id: 10 
            },{ 
                order_id: randomNumber(startOrderId,endOredrId), 
                item_id: randomNumber(startItemId,endItemId), 
                quantity: randomNumber(otherStart,otherEnd), 
                price_per_item: 109.99, 
                store_id: 1
            },{ 
                order_id: randomNumber(startOrderId,endOredrId), 
                item_id: randomNumber(startItemId,endItemId), 
                quantity: randomNumber(otherStart,otherEnd), 
                price_per_item: 119.99,
                store_id: 2
            },{ 
                order_id: randomNumber(startOrderId,endOredrId), 
                item_id: randomNumber(startItemId,endItemId), 
                quantity: randomNumber(otherStart,otherEnd), 
                price_per_item: 129.99,
                store_id: 3
            },{ 
                order_id: randomNumber(startOrderId,endOredrId), 
                item_id: randomNumber(startItemId,endItemId), 
                quantity: randomNumber(otherStart,otherEnd), 
                price_per_item: 1399.99,
                store_id: 4
            },{ 
                order_id: randomNumber(startOrderId,endOredrId), 
                item_id: randomNumber(startItemId,endItemId), 
                quantity: randomNumber(otherStart,otherEnd), 
                price_per_item: 9.99, 
                store_id: 5
            },{ 
                order_id: randomNumber(startOrderId,endOredrId), 
                item_id: randomNumber(startItemId,endItemId), 
                quantity: randomNumber(otherStart,otherEnd), 
                price_per_item: 9.99,
                store_id: 6
            },
            { order_id: randomNumber(startOrderId,endOredrId), 
                item_id: randomNumber(startItemId,endItemId), 
                quantity: randomNumber(otherStart,otherEnd), 
                price_per_item: 9.99,
                store_id: 7
            },
            { order_id: randomNumber(startOrderId,endOredrId), 
                item_id: randomNumber(startItemId,endItemId),
                quantity: randomNumber(otherStart,otherEnd), 
                price_per_item: 9.99,
                store_id: 8
            },

        ];

        await OrderDetails.bulkCreate(orderDetailData);
        console.log('Les données de commandes ont été insérées avec succès.');
    } catch (error) {
        console.error('Une erreur s\'est produite lors de l\'insertion des données de commandes :', error);
    }
};

module.exports = insertOrderDetailsData;
