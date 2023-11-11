const InventoryMovements = require('../models/inventoryMovements');
const Items = require('../models/items'); 
const Finances = require('../models/finance'); 
const Stocks = require('../models/stocks');
const sequelize = require('../models/index'); 
const { QueryTypes } = require('sequelize');


/**
 * A chaque valeur de 'value' cette fonction crée une nouvelle ligne dans la table
 * @date 18/09/2023 - 16:09:28
 *
 * @async
 * @param {number} storeId il s'agit de l'id du store concerné par le ravitaillement
 * @param {number} value Prend succesivement les ids contenues dans le tableau item_chosenId
 * @param {number} quantity 
 * @returns {}
 */
async function insertDataIntoTable(storeId, value, quantity) {
    const orderDate = new Date(); 
    try {
        const movment = await InventoryMovements.create({
            store_id: storeId,
            item_id: value.item_id,
            movement_date: orderDate,
            quantity: quantity 
        });
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    
    commander: async (req, res) => {
        const { storeId, item_chosenId, quantity} = req.body;
        try {            
            for (const value of item_chosenId) {
                await insertDataIntoTable(storeId, value, quantity);
            }
            let totalAmount = 0;

            for (let i = 0; i < item_chosenId.length; i++) {
                const itemId = item_chosenId[i].item_id;
                const item = await Items.findOne({ where: { item_id: itemId } });
                if (!item) {
                    return res.status(404).json({ 'message': `Item with ID ${itemId} not found` });
                }
                const itemPrice = item.price;
                const itemTotal = itemPrice * quantity;
                totalAmount += itemTotal;
            }

            const account = await Finances.findOne({ where: { store_id: storeId } });
    
            if (!account) {
                return res.status(404).json({ 'message': `Store with ID ${storeId} not found` });
            }
            
            const storeBalance = account.capital + account.income - account.depenses;
            if (totalAmount > storeBalance) {
                return res.status(400).json({ 'message': 'Insufficient balance' });
            } 
            const newExpenses = account.depenses + totalAmount;
            await account.update({ depenses: newExpenses });
            
            for (const itemIds of item_chosenId) {
                const itemId = itemIds.item_id
                const item = await Items.findOne({ where: { item_id: itemId } });

                if (!item) {
                    return res.status(404).json({ 'message': `Item with ID ${itemId} not found` });
                }
                const newQuantityInItems = item.stock_quantity + quantity;
                await item.update({ stock_quantity: newQuantityInItems });

                const stock = await Stocks.findOne({ where: { item_id: itemId } });
                if (stock) {
                    const newQuantityInStocks = stock.quantity + quantity;
                    await stock.update({ quantity: newQuantityInStocks });
                } else {
                    console.error(`Stock not found for Item ID ${itemId}`);
                }
            }
            return res.status(200).json({'results': 'success'});
        } catch (error) {
            return res.status(401).json({ 'message': error });
        }
    },

    history: async (req, res) => {
        const id_store = req.params.id_store
        try{
            const sqlQuery = `
                SELECT
                    im.item_id,
                    im.quantity,
                    im.movement_date,
                    (
                        SELECT item_name
                        FROM "Items"
                        WHERE item_id = im.item_id
                    ) AS item_name,
                    (
                        SELECT supplier_name
                        FROM "Suppliers"
                        WHERE category_id = (
                            SELECT category_id
                            FROM "Items"
                            WHERE item_id = im.item_id
                        )
                    ) AS supplier_name
                FROM
                    "InventoryMovements" im
                WHERE store_id = ${id_store};
            `;
            const results = await sequelize.query(sqlQuery, { type: QueryTypes.SELECT });
            return res.status(200).json({'results': results});
        } catch (error) {
            return res.status(401).json({ 'message': error });
        }
    }
}




