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
                price_per_item: 9.99 
            },{ 
                order_id: randomNumber(startOrderId,endOredrId), 
                item_id: randomNumber(startItemId,endItemId), 
                quantity: randomNumber(otherStart,otherEnd), 
                price_per_item: 19.99 
            },{ 
                order_id: randomNumber(startOrderId,endOredrId), 
                item_id: randomNumber(startItemId,endItemId), 
                quantity: randomNumber(otherStart,otherEnd), 
                price_per_item: 29.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 39.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 49.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 59.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 69.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 79.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 89.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 99.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 109.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 119.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 129.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 1399.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 19.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 19.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 19.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 19.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            { order_id: randomNumber(startOrderId,endOredrId), item_id: randomNumber(startItemId,endItemId), quantity: randomNumber(otherStart,otherEnd), price_per_item: 9.99 },
            
        ];

        await OrderDetails.bulkCreate(orderDetailData);
        console.log('Les données de commandes ont été insérées avec succès.');
    } catch (error) {
        console.error('Une erreur s\'est produite lors de l\'insertion des données de commandes :', error);
    }
};

module.exports = insertOrderDetailsData;
