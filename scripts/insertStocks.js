const Stores = require('../models/stores'); 
const Items = require('../models/items');
const Stocks = require('../models/stocks');

function randomNumber(start, end) {
    return Math.floor(Math.random()*(end - start + 1)) + start;
}


const insertStockData = async () => {
    try {
        const stockData = [
            {
                store_id: 1,
                item_id: 1,
                quantity: randomNumber(1, 150)
            }, {
                store_id:1,
                item_id: 2,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 1,
                item_id: 3,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 1,
                item_id: 4,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 1,
                item_id: 5,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 1,
                item_id: 6,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 1,
                item_id: 7,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 1,
                item_id: 8,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 1,
                item_id: 9,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 1,
                item_id: 10,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 2,
                item_id: 11,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 2,
                item_id: 12,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 2,
                item_id: 13,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 2,
                item_id: 14,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 2,
                item_id: 15,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 2,
                item_id: 16,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 2,
                item_id: 17,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 2,
                item_id: 18,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 2,
                item_id: 19,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 2,
                item_id: 20,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 3,
                item_id: 21,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 3,
                item_id: 22,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 3,
                item_id: 23,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 3,
                item_id: 24,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 3,
                item_id: 25,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 3,
                item_id: 26,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 3,
                item_id: 27,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 3,
                item_id: 28,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 3,
                item_id: 29,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 3,
                item_id: 30,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 4,
                item_id: 31,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 4,
                item_id: 32,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 4,
                item_id: 33,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 4,
                item_id: 34,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 4,
                item_id: 35,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 4,
                item_id: 36,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 4,
                item_id: 37,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 4,
                item_id: 38,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 4,
                item_id: 39,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 4,
                item_id: 40,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 5,
                item_id: 41,
                quantity: randomNumber(1, 150)
            }, {
                store_id:5,
                item_id: 42,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 5,
                item_id: 43,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 5,
                item_id: 44,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 5,
                item_id: 45,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 5,
                item_id: 46,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 5,
                item_id: 47,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 5,
                item_id: 48,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 5,
                item_id: 49,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 5,
                item_id: 50,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 6,
                item_id: 51,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 6,
                item_id: 52,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 6,
                item_id: 53,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 6,
                item_id: 54,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 6,
                item_id: 55,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 6,
                item_id: 56,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 6,
                item_id: 57,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 6,
                item_id: 58,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 6,
                item_id: 59,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 6,
                item_id: 60,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 7,
                item_id: 61,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 7,
                item_id: 62,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 7,
                item_id: 63,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 7,
                item_id: 64,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 7,
                item_id: 65,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 7,
                item_id: 66,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 7,
                item_id: 67,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 7,
                item_id: 68,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 7,
                item_id: 69,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 7,
                item_id: 70,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 8,
                item_id: 71,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 8,
                item_id: 72,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 8,
                item_id: 73,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 8,
                item_id: 74,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 8,
                item_id: 75,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 8,
                item_id: 76,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 8,
                item_id: 77,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 8,
                item_id: 78,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 8,
                item_id: 79,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 8,
                item_id: 80,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 9,
                item_id: 81,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 9,
                item_id: 82,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 9,
                item_id: 83,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 9,
                item_id: 84,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 9,
                item_id: 85,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 9,
                item_id: 86,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 9,
                item_id: 87,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 9,
                item_id: 88,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 9,
                item_id: 89,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 9,
                item_id: 90,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 10,
                item_id: 91,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 10,
                item_id: 92,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 10,
                item_id: 93,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 10,
                item_id: 94,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 10,
                item_id: 95,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 10,
                item_id: 96,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 10,
                item_id: 97,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 10,
                item_id: 98,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 10,
                item_id: 99,
                quantity: randomNumber(1, 150)
            }, {
                store_id: 10,
                item_id: 100,
                quantity: randomNumber(1, 150)
            }
        ];
        await Stocks.bulkCreate(stockData);

        console.log('Données Stocks insérées avec succès.');
    } catch (error) {
        console.error('Erreur de insertion de données dans Stocks:', error);
    }
};

module.exports = insertStockData;
