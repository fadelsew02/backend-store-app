const Finances = require('../models/finance'); // Assurez-vous d'importer les modèles correctement

const insertFinanceData = async () => {
    try {

        const financeData = [
            {
                store_id: 1,
                capital: 20000,
                depenses: 5000,
                revenus: 1000,
            },{
                store_id: 2,
                capital: 20000,
                depenses: 5000,
                revenus: 1100,
            },{
                store_id: 3,
                capital: 20000,
                depenses: 5000,
                revenus: 1200,
            },{
                store_id: 4,
                capital: 20000,
                depenses: 5000,
                revenus: 1300,
            },{
                store_id: 5,
                capital: 20000,
                depenses: 5000,
                revenus: 1400,
            },{
                store_id: 6,
                capital: 20000,
                depenses: 5000,
                revenus: 1500,
            },{
                store_id: 7,
                capital: 20000,
                depenses: 5000,
                revenus: 1600,
            },{
                store_id: 8,
                capital: 20000,
                depenses: 50010,
                revenus: 1900,
            },{
                store_id: 9,
                capital: 30000,
                depenses: 5000,
                revenus: 1800,
            },{
                store_id: 10,
                capital: 20000,
                depenses: 52000,
                revenus: 1700,
            },
     
        ];
        await Finances.bulkCreate(financeData);

        console.log('Données insérées avec succès.');
    } catch (error) {
        console.error('Erreur de insertion de données:', error);
    }
};

module.exports = insertFinanceData;
