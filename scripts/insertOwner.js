
const bcrypt = require('bcrypt');
const Users = require('../models/Users'); 

const insertOwner = async () => {
    try {
        const ownerData = [
            {
                owner_id: 1,
                owner_surname: 'Fadel',
                owner_name: 'SEWADE',
                owner_email: 'fadelsew@example.com',
                owner_password: await bcrypt.hash('fadel@SEWADE1', 5)
            }  
        ];

        await Users.bulkCreate(ownerData);

        console.log('Data are inserted successfully.');
    } catch (error) {
        console.error('Une erreur s\'est produite lors de l\'insertion des données de fournisseurs :', error);
    }
};

module.exports = insertOwner;
