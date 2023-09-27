const InventoryMovements = require('../models/inventoryMovements'); 

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const insertInventory = async () => {
    try {

        const inventoryMovementData = [
            { store_id: 1, item_id: 1, movement_date: randomDate(new Date(2023, 0, 1), new Date()), quantity: 50 },
            { store_id: 2, item_id: 2, movement_date: randomDate(new Date(2023, 0, 1), new Date()), quantity: 40 },
            { store_id: 3, item_id: 1, movement_date: randomDate(new Date(2023, 0, 1), new Date()), quantity: 30 },
            { store_id: 4, item_id: 2, movement_date: randomDate(new Date(2023, 0, 1), new Date()), quantity: 20 },
            { store_id: 5, item_id: 1, movement_date: randomDate(new Date(2023, 0, 1), new Date()), quantity: 10 },
            { store_id: 7, item_id: 2, movement_date: randomDate(new Date(2023, 0, 1), new Date()), quantity: 90 },
            { store_id: 8, item_id: 1, movement_date: randomDate(new Date(2023, 0, 1), new Date()), quantity: 80 },
            { store_id: 9, item_id: 2, movement_date: randomDate(new Date(2023, 0, 1), new Date()), quantity: 70 },
            { store_id: 1, item_id: 1, movement_date: randomDate(new Date(2023, 0, 1), new Date()), quantity: 100 },
            { store_id: 2, item_id: 2, movement_date: randomDate(new Date(2023, 0, 1), new Date()), quantity: 130 },
            { store_id: 6, item_id: 1, movement_date: randomDate(new Date(2023, 0, 1), new Date()), quantity: 90 },
            { store_id: 4, item_id: 2, movement_date: randomDate(new Date(2023, 0, 1), new Date()), quantity: 10 },
            { store_id: 7, item_id: 1, movement_date: randomDate(new Date(2023, 0, 1), new Date()), quantity: 70 },
            { store_id: 5, item_id: 2, movement_date: randomDate(new Date(2023, 0, 1), new Date()), quantity: 30 },

        ];

        await InventoryMovements.bulkCreate(inventoryMovementData);
        console.log('Les données de mouvement ont été insérées avec succès.');
    } catch (error) {
        console.error('Une erreur s\'est produite lors de l\'insertion des données de mouvement :', error);
    }
};

module.exports = insertInventory;
