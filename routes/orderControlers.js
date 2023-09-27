// const Orders = require('../models/orders');
// const Customers = require('../models/customers')
// const { Op } = require('sequelize'); 

// module.exports = {
//     buy: async function (req, res) {
//         try {
//             const customerFound = await Customers.findOne({
//                 where: {
//                    [Op.or]: [{ username: username }, {email: email}]
//                 }
//             });

//             if (customerFound) {
//                 return res.status(405).json({ 'message': 'Ce username ou email est déjà utilisé' });
//             }
    
//             const bcryptedPassword = await bcrypt.hash(password, 5);
    
//             const newCustomer = await Customers.create({
//                 email: email,
//                 username: username,
//                 password: bcryptedPassword,
//                 nom: nom,
//                 prenom: prenom
//             });
    
//             return res.status(201).json({
//                 'results': newCustomer.customer_id,
//             });
//         } catch (error) {
//             return res.status(401).json({ 'message': 'cannot add user' });
//         }
//     }
// }
