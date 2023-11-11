const sequelize = require('../models/index');
const { QueryTypes } = require('sequelize');
// const { Op } = require('sequelize');
// const Orders = require('../models/orders');
// const OrderDetails = require('../models/orderDetails');
// const Items = require('../models/items');
const Customers = require('../models/customers');


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
          if(id_store > 0 ){
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
          } else {
            const results = await Customers.findAll({
              attributes: ['nom', 'prenom', 'email', 'photo']
            })
            return res.status(200).json({ 'results': results });
          }
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
          `;
          const orders = await sequelize.query(sqlQuery, { type: QueryTypes.SELECT });
      
          // Create an object to store purchases organized by order_id
          const purchasesByOrderId = orders.reduce((result, order) => {
            const date = new Date(order.order_date);
            const monthYear = getMonthYearString(date);
      
            if (!result[monthYear]) {
              result[monthYear] = [];
            }
      
            const existingOrder = result[monthYear].find((group) => group.order_id === order.order_id);
      
            if (existingOrder) {
              existingOrder.purchases_id.push({
                order_date: order.order_date,
                total_amount: order.total_amount,
                item_id: order.item_id,
                price_per_item: order.price_per_item,
                quantity: order.quantity,
                item_name: order.item_name,
                url_photo: order.url_photo,
              });
            } else {
              result[monthYear].push({
                order_id: order.order_id,
                purchases_id: [
                  {
                    order_date: order.order_date,
                    total_amount: order.total_amount,
                    item_id: order.item_id,
                    price_per_item: order.price_per_item,
                    quantity: order.quantity,
                    item_name: order.item_name,
                    url_photo: order.url_photo,
                  },
                ],
              });
            }
      
            return result;
          }, {});
      
          // Convert the object to an array
          const purchasesArray = Object.keys(purchasesByOrderId).map((monthYear) => ({
            monthYear,
            purchases: purchasesByOrderId[monthYear],
          }));
      
          // Send the data to the client
          return res.status(200).json({ 'results': purchasesArray });
        } catch (error) {
          return res.status(401).json({ message: error.message });
        }
      }
           
};
