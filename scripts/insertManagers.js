const Managers = require('../models/managers'); // Assurez-vous d'importer le modèle Manager correctement
const bcrypt = require('bcrypt');

const insertManagerData = async () => {
    try {

        const managersData = [
            {
                manager_firstname: 'Alice',
                manager_surname: 'Manager',
                manager_email: 'alice@example.com',
                manager_username: 'alice_manager',
                manager_password: await bcrypt.hash('alice1Manager@', 5),
                manager_phone: '+22961892564'
            }, {
                manager_firstname: 'Bob',
                manager_surname: 'Manage',
                manager_email: 'bob@example.com',
                manager_username: 'bob_manager',
                manager_password: await bcrypt.hash('bob2Manager@', 5),
                manager_phone: '+22963456789'
            }, {
                manager_firstname: 'Charlie',
                manager_surname: 'Manager',
                manager_email: 'charlie@example.com',
                manager_username: 'charlie_manager',
                manager_password: await bcrypt.hash('charlie3Manager@', 5),
                manager_phone: '+22962762564'
            }, {
                manager_firstname: 'David',
                manager_surname: 'Manager',
                manager_email: 'david@example.com',
                manager_username: 'david_manager',
                manager_password: await bcrypt.hash('david4Manager@', 5),
                manager_phone: '+22963986789'
            }, {
                manager_firstname: 'Emilie',
                manager_surname: 'Manager',
                manager_email: 'emilie@example.com',
                manager_username: 'emilie_manager',
                manager_password: await bcrypt.hash('emilie5Manager@', 5),
                manager_phone: '+22961122564'
            }, {
                manager_firstname: 'Frank',
                manager_surname: 'Manager',
                manager_email: 'frank@example.com',
                manager_username: 'frank_manager',
                manager_password: await bcrypt.hash('frank6Manager@', 5),
                manager_phone: '+22963455989'
            }, {
                manager_firstname: 'Grace',
                manager_surname: 'Manager',
                manager_email: 'grace@example.com',
                manager_username: 'grace_manager',
                manager_password: await bcrypt.hash('grace7Manager@', 5),
                manager_phone: '+22963136789'
            }, {
                manager_firstname: 'Hannah',
                manager_surname: 'Manager',
                manager_email: 'hannah@example.com',
                manager_username: 'hannah_manager',
                manager_password: await bcrypt.hash('hannah8Manager@', 5),
                manager_phone: '+22961142564'
            }, {
                manager_firstname: 'Ian',
                manager_surname: 'Manager',
                manager_email: 'ian@example.com',
                manager_username: 'ian_manager',
                manager_password: await bcrypt.hash('ian9Manager@', 5),
                manager_phone: '+22963455123'
            }, {
                manager_firstname: 'Jessica',
                manager_surname: 'Manager',
                manager_email: 'jessica@example.com',
                manager_username: 'jessica_manager',
                manager_password: await bcrypt.hash('jessica10Manager@', 5),
                manager_phone: '+22969955123'
            }

        ];

        await Managers.bulkCreate(managersData);
        console.log('Data insérés avec succès.');
    } catch (error) {
        console.error('Erreur au cours de insertion de données:', error);
    }
};

module.exports = insertManagerData;
