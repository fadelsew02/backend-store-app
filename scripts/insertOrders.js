const Orders = require('../models/orders'); 

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const insertOrderData = async () => {
    try {

        const orderData = [
            { order_date: randomDate(new Date(2023, 0, 1), new Date()), customer_id: 1, total_amount: 150.99 },
            { order_date: randomDate(new Date(2023, 0, 1), new Date()), customer_id: 1, total_amount: 89.75 },
            { order_date: randomDate(new Date(2023, 0, 1), new Date()), customer_id: 1, total_amount: 110.99 },
            { order_date: randomDate(new Date(2023, 0, 1), new Date()), customer_id: 3, total_amount: 80.75 },
            { order_date: randomDate(new Date(2023, 0, 1), new Date()), customer_id: 1, total_amount: 50.99 },
            { order_date: randomDate(new Date(2023, 0, 1), new Date()), customer_id: 1, total_amount: 90.75 },
            { order_date: randomDate(new Date(2023, 0, 1), new Date()), customer_id: 1, total_amount: 190.99 },
            { order_date: randomDate(new Date(2023, 0, 1), new Date()), customer_id: 1, total_amount: 79.75 },
            { order_date: randomDate(new Date(2023, 0, 1), new Date()), customer_id: 9, total_amount: 70.99 },
            { order_date: randomDate(new Date(2023, 0, 1), new Date()), customer_id: 10, total_amount: 99.75 },
            { order_date: randomDate(new Date(2023, 0, 1), new Date()), customer_id: 14, total_amount: 150.99 },
            { order_date: randomDate(new Date(2023, 0, 1), new Date()), customer_id: 1, total_amount: 143.75 },
            { order_date: randomDate(new Date(2023, 0, 1), new Date()), customer_id: 1, total_amount: 120.99 },
            { order_date: randomDate(new Date(2023, 0, 1), new Date()), customer_id: 13, total_amount: 119.75 }
        ];

        await Orders.bulkCreate(orderData);
        console.log('Les données de commandes ont été insérées avec succès.');
    } catch (error) {
        console.error('Une erreur s\'est produite lors de l\'insertion des données de commandes :', error);
    }
};

module.exports = insertOrderData;
