const express = require('express');
const userControlers = require('./routes/userControlers');
const supplierControlers = require('./routes/supplierControlers');
const itemControlers = require('./routes/itemControlers');
const inventoryControlers = require('./routes/inventoryControlers');
const storeControlers = require('./routes/storeControlers');
const stocksControlers = require('./routes/stocksControlers');
const financeControlers = require('./routes/financeControlers');
const customerControlers = require('./routes/customerControlers');
const ordersDetailsControlers = require('./routes/ordersDetailsControlers');
// const orderControlers = require('./routes/orderControlers');

// Router
exports.router = (function() {
  const apiRouter = express.Router();

  // Users routes
  apiRouter.route('/users/register/').post(userControlers.register);
  apiRouter.route('/users/login/').post(userControlers.login);
  apiRouter.route('/users/me/:token').get(userControlers.getUserProfile);
  apiRouter.route('/users/me/').put(userControlers.updateUserProfile);

  //Suppliers routes
  apiRouter.route('/suppliers/display/').get(supplierControlers.display);
  apiRouter.route('/suppliers/delete/:id').delete(supplierControlers.delete);
  apiRouter.route('/suppliers/add/').post(supplierControlers.add);
  // apiRouter.route('/suppliers/edit/').post(supplierControlers.editProfile);
  
  apiRouter.route('/items/display/:cat').get(itemControlers.display);
  apiRouter.route('/items/getAllId/:itemName').get(itemControlers.getAllId);
  
  apiRouter.route('/stores/getStoreId/:managerId').get(storeControlers.getStoreId);


  apiRouter.route('/inventory/commander').post(inventoryControlers.commander);
  apiRouter.route('/inventory/history/:id_store').get(inventoryControlers.history);


  apiRouter.route('/stocks/display/:id_store').get(stocksControlers.display);
  apiRouter.route('/stocks/edit/:idToEdit').put(stocksControlers.updatePriceQuantity);
  apiRouter.route('/stocks/panier').post(stocksControlers.panier);
  apiRouter.route('/stocks/payment').post(stocksControlers.payment);

  
  apiRouter.route('/customers/listesCourses/:customer_id').get(customerControlers.list);
  apiRouter.route('/customers/display/:id_store').get(customerControlers.display);
  
  
  apiRouter.route('/finances/recuperer/:id_store').get(financeControlers.recuperer);
  
  // apiRouter.route('/orders/buy').post(orderControlers.buy)
  
  apiRouter.route('/ordersDetails/display/:order_id').get(ordersDetailsControlers.display);

  return apiRouter;
})();
