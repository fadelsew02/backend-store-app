const sequelize = require('../models/index');
const { QueryTypes } = require('sequelize');
// const { Op } = require('sequelize');
const Orders = require('../models/orders');
const OrderDetails = require('../models/orderDetails');
const Items = require('../models/items')


function getMonthYearString(date) {
    const monthString = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];
    
    const month = monthString[date.getMonth()];
    const year = date.getFullYear();
    
    return `${month} ${year}`;
}

module.exports = {
    /**
     * Get customers specific to a store.
     * id_store is passed as a parameter in the request.
     *
     * @async
     * 
     * @param {string} req
     * @param {object} res
     * @returns {{nom: string, prenom: string, email: string, order_date: date, total_amount: number, order_id: number}[]} results
     * @throws {object} - A JSON object containing an error message in case of an error.
     */
    display: async (req, res) => {
        const id_store = req.params.id_store;
        try {
            const sqlQuery = `
                SELECT
                    c.nom,
                    c.prenom,
                    c.email,
                    o.order_date,
                    o.total_amount,
                    o.order_id
                FROM
                    "Customers" AS c
                INNER JOIN
                    "Orders" AS o
                ON
                    c.customer_id = o.customer_id
                WHERE
                    o.store_id = ${id_store};
            `;
            const results = await sequelize.query(sqlQuery, { type: QueryTypes.SELECT });
            return res.status(200).json({ 'results': results });
        } catch (error) {
            return res.status(401).json({ 'message': error.message });
        }
    },

    /**
 * Retrieves purchases made by a customer sorted by month and year.
    *
    * @async
    * @param {object} req - The Express request object.
    * @param {object} res - The Express response object.
    * @returns {object[]} - An array of objects containing purchases sorted by month and year.
    * @throws {object} - An object containing an error message in case of an error.
    */
   list: async (req, res) => {
       const customer_id = req.params.customer_id;
       try {
           // Retrieve data from the Orders table, sorting by order_date from the most recent date to the oldest date
           const sqlQuery = `SELECT         
                       O.order_date,
                       O.total_amount,
                       O.order_id,
                       OD.item_id,
                       OD.price_per_item,
                       OD.quantity,
                       I.item_name,
                       I.url_photo
                   FROM
                       "Orders" AS O
                   INNER JOIN
                       "OrderDetails" AS OD
                   ON
                       O.order_id = OD.order_id
                   INNER JOIN
                       "Items" AS I
                   ON
                       OD.item_id = I.item_id
                   WHERE
                       O.customer_id = ${customer_id}
                   ORDER BY
                       O.order_date DESC;
                   `
                   const orders = await sequelize.query(sqlQuery, { type: QueryTypes.SELECT });
   
           // Create an array to store purchases by month and year
           const purchasesByMonthAndYear = [];
   
           // Create a temporary object to group purchases by month and year
           const tempPurchases = {};
   
           // Loop through the database results
           orders.forEach((order) => {
               const date = new Date(order.order_date);
               const monthYear = getMonthYearString(date);
   
               if (!tempPurchases[monthYear]) {
                   tempPurchases[monthYear] = [];
               }
   
               tempPurchases[monthYear].push({
                   order_id: order.order_id,
                   order_date: order.order_date,
                   total_amount: order.total_amount,
                   item_id: order.item_id,
                   price_per_item: order.price_per_item,
                   quantity: order.quantity,
                   item_name: order.item_name,
                   url_photo: order.url_photo
               });
           });
   
           // Convert the object to an array
        //    for (const monthYear in tempPurchases) {
        //        purchasesByMonthAndYear.push({
        //            monthYear,
        //            purchases: tempPurchases[monthYear]
        //        });
        //    }
        for (const monthYear in tempPurchases) {
            const purchases = tempPurchases[monthYear].sort((a, b) => a.order_id - b.order_id); // Sort by order_id
            purchasesByMonthAndYear.push({
                monthYear,
                purchases
            });
        }
   
           // Send the data to the client as an array organized by month and year
           return res.status(200).json({ 'results': purchasesByMonthAndYear });
       } catch (error) {
           return res.status(401).json({ message: error.message });
       }
   }
};
