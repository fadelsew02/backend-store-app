const InventoryMovements = require('../models/inventoryMovements'); 
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
        await InventoryMovements.create({
            store_id: storeId.store_id,
            item_id: value.item_id,
            movement_date: orderDate,
            quantity: quantity 
        });
        console.log(`Valeur ${value} insérée avec succès.`);
    } catch (error) {
        console.error(`Erreur lors de l'insertion de la valeur ${value}.`);
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
            return res.status(200).json({'results': ''});
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




