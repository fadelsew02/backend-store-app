const Orders = require('../models/orders'); 

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const insertOrderData = async () => {
    try {

        const orderData = [
            { store_id: 1, order_date: randomDate(new Date(2023, 0, 1), new Date()), customer_id: 1, total_amount: 150.99 },
            { store_id: 2, order_date: randomDate(new Date(2023, 0, 1), new Date()), customer_id: 2, total_amount: 89.75 },
            { store_id: 4, order_date: randomDate(new Date(2023, 0, 1), new Date()), customer_id: 4, total_amount: 110.99 },
            { store_id: 5, order_date: randomDate(new Date(2023, 0, 1), new Date()), customer_id: 3, total_amount: 80.75 },
            { store_id: 6, order_date: randomDate(new Date(2023, 0, 1), new Date()), customer_id: 8, total_amount: 50.99 },
            { store_id: 3, order_date: randomDate(new Date(2023, 0, 1), new Date()), customer_id: 6, total_amount: 90.75 },
            { store_id: 8, order_date: randomDate(new Date(2023, 0, 1), new Date()), customer_id: 5, total_amount: 190.99 },
            { store_id: 7, order_date: randomDate(new Date(2023, 0, 1), new Date()), customer_id: 7, total_amount: 79.75 },
            { store_id: 6, order_date: randomDate(new Date(2023, 0, 1), new Date()), customer_id: 9, total_amount: 70.99 },
            { store_id: 10, order_date: randomDate(new Date(2023, 0, 1), new Date()), customer_id: 10, total_amount: 99.75 },
            { store_id: 8, order_date: randomDate(new Date(2023, 0, 1), new Date()), customer_id: 14, total_amount: 150.99 },
            { store_id: 2, order_date: randomDate(new Date(2023, 0, 1), new Date()), customer_id: 11, total_amount: 143.75 },
            { store_id: 6, order_date: randomDate(new Date(2023, 0, 1), new Date()), customer_id: 12, total_amount: 120.99 },
            { store_id: 1, order_date: randomDate(new Date(2023, 0, 1), new Date()), customer_id: 13, total_amount: 119.75 }
        ];

        await Orders.bulkCreate(orderData);
        console.log('Les données de commandes ont été insérées avec succès.');
    } catch (error) {
        console.error('Une erreur s\'est produite lors de l\'insertion des données de commandes :', error);
    }
};

module.exports = insertOrderData;
