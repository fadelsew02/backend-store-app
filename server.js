const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); 
const apiRouter = require('./apiRouter').router;
const sequelize = require('./models/index')


const insertItems = require('./scripts/insertItems');
const insertCategories = require('./scripts/insertCategories');
const insertCustomers = require('./scripts/insertCustomers');
const insertInventory = require('./scripts/insertInventory');
const insertOrders = require('./scripts/insertOrders');
const insertOrderDetailsData = require('./scripts/insertOrderDetails');
const insertStores = require('./scripts/insertStores');
const insertSuppliers = require('./scripts/insertSuppliers');
const insertManagers = require('./scripts/insertManagers');
const insertStockData = require('./scripts/insertStocks');
const insertFinanceData = require('./scripts/insertFinance');
const insertOwner = require('./scripts/insertOwner');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/', apiRouter);

(async () => {
  try {
      await sequelize.authenticate();
      console.log('Connection to database successfully.');

      await sequelize.sync({force: true})

      await insertCategories();
      await insertManagers();
      await insertStores();
      await insertSuppliers();
      await insertCustomers();
      await insertItems();
      await insertInventory();
      await insertOrders();   
      await insertStockData();
      await insertOrderDetailsData();
      await insertFinanceData();
      await insertOwner();
      
  } catch (error) {
    await sequelize.close();
    console.log('Connection to the database closed');
      console.error('Une erreur s\'est produite :', error);
  }
})();


const port = 5000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// const environment = process.env.ENVIRONMENT || 'sandbox';
// const client_id = process.env.CLIENT_ID;
// const client_secret = process.env.CLIENT_SECRET;
// const endpoint_url = environment === 'sandbox' ? 'https://api-m.sandbox.paypal.com' : 'https://api-m.paypal.com';


// function get_access_token(){
//   const auth = `${client_id}:${client_secret}`
//   const data = 'grant_type=client_credentials'
//   return fetch(endpoint_url+'/v1/oauth2/token', {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/x-www-form-urlencoded',
//       'Authorization': `Basic ${Buffer.from(auth).toString('base64')}`
//     }, 
//     body: data
//   })
//   .then(res => res.json())
//   .then(json => { return json.access_token; })
// }