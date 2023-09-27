const Stores = require('../models/stores'); // Assurez-vous d'importer les modèles correctement
const Managers = require('../models/managers');

const insertStoreData = async () => {
    try {
        // Récupérez les IDs des managers à partir de la table "managers"
        const managers = await Managers.findAll();

        const storeData = [
            {
                store_name: 'Magasin A',
                manager_id: managers[0].manager_id,
                staff_count: 15,
                address: 'Emplacement A',
                contact_email: 'magasina@example.com',
                contact_phone: '+22961897864'
            }, {
                store_name: 'Magasin B',
                manager_id: managers[1].manager_id,
                staff_count: 12,
                address: 'Emplacement B',
                contact_email: 'magasinb@example.com',
                contact_phone: '+22969456789'
            }, {
                store_name: 'Magasin C',
                manager_id: managers[2].manager_id,
                staff_count: 15,
                address: 'Emplacement C',
                contact_email: 'magasinc@example.com',
                contact_phone: '+22961898864'
            }, {
                store_name: 'Magasin D',
                manager_id: managers[3].manager_id,
                staff_count: 12,
                address: 'Emplacement D',
                contact_email: 'magasind@example.com',
                contact_phone: '+22969956789'
            }, {
                store_name: 'Magasin E',
                manager_id: managers[4].manager_id,
                staff_count: 15,
                address: 'Emplacement E',
                contact_email: 'magasine@example.com',
                contact_phone: '+22961892864'
            }, {
                store_name: 'Magasin F',
                manager_id: managers[5].manager_id,
                staff_count: 12,
                address: 'Emplacement F',
                contact_email: 'magasinf@example.com',
                contact_phone: '+22960456789'
            }, {
                store_name: 'Magasin G',
                manager_id: managers[6].manager_id,
                staff_count: 15,
                address: 'Emplacement G',
                contact_email: 'magasing@example.com',
                contact_phone: '+22961897894'
            }, {
                store_name: 'Magasin H',
                manager_id: managers[7].manager_id,
                staff_count: 12,
                address: 'Emplacement H',
                contact_email: 'magasinh@example.com',
                contact_phone: '+22969455789'
            }, {
                store_name: 'Magasin I',
                manager_id: managers[8].manager_id,
                staff_count: 15,
                address: 'Emplacement I',
                contact_email: 'magasini@example.com',
                contact_phone: '+22960897864'
            }, {
                store_name: 'Magasin J',
                manager_id: managers[9].manager_id,
                staff_count: 12,
                address: 'Emplacement J',
                contact_email: 'magasinj@example.com',
                contact_phone: '+22969450789'
            }
        ];
        await Stores.bulkCreate(storeData);

        console.log('Données insérées avec succès.');
    } catch (error) {
        console.error('Erreur de insertion de données:', error);
    }
};

module.exports = insertStoreData;
