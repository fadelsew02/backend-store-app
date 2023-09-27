
const Suppliers = require('../models/suppliers'); // Assurez-vous d'ajuster le chemin d'accès au modèle Supplier

const insertSuppliers = async () => {
    try {
        const suppliersData = [
            {
                category_id: 1,
                supplier_name: 'Fournisseur A',
                contact_email: 'fournisseurA@example.com',
                contact_phone: '+1234567890'
            },
            {
                category_id: 2,
                supplier_name: 'Fournisseur B',
                contact_email: 'fournisseurB@example.com',
                contact_phone: '+9876543210'
            }
            
        ];

        await Suppliers.bulkCreate(suppliersData);

        console.log('Données de fournisseurs insérées avec succès.');
    } catch (error) {
        console.error('Une erreur s\'est produite lors de l\'insertion des données de fournisseurs :', error);
    }
};

module.exports = insertSuppliers;
