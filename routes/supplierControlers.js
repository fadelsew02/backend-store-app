// const express = require('express');
const Suppliers = require('../models/suppliers'); // Importez le modèle Supplier
const Items = require('../models/items');

module.exports = {
    // Afficher tous les fournisseurs
    display: async (req, res) => {
        const store_id = req.params.store_id;
        try {
            if (store_id < 0) {
                const suppliers = await Suppliers.findAll({
                    attributes: ['supplier_id', 'category_id', 'supplier_name', 'contact_email', 'contact_phone'],
                });
                return res.status(200).json({ 'results': suppliers });
            } else {
                const items = await Items.findAll({
                    where: { store_id: store_id },
                    attributes: ['category_id'],
                });

                const categoryIds = items.map(item => item.category_id);

                const suppliers = await Suppliers.findAll({
                    where: { category_id: categoryIds },
                    attributes: ['supplier_id', 'category_id', 'supplier_name', 'contact_email', 'contact_phone'],
                });
    
                return res.status(200).json({ 'results': suppliers });
            }
        } catch (error) {
            return res.status(401).json({ 'message': 'Impossible de récupérer les données' });
        }
    },
    

    // Ajouter un fournisseur
    add: async(req, res) => {
        const { category, name, email, phone } = req.body;

        try {
            const newSupplier = await Suppliers.create({
                category_id: category,
                supplier_name: name,
                contact_email: email,
                contact_phone: phone
            });
            return res.status(201).json({'message': 'Fournisseur ajouté avec succès', 'newSupplier': newSupplier});
        } catch (error) {
           console.error(error);
            return res.status(401).json({ 'message': 'Erreur lors de ajout de nouveau fournisseur' });
        }
    },

    delete: async (req, res) => {
        const supplierId = req.params.id;

        try {
            const supplier = await Suppliers.findOne({
                where: {
                    supplier_id: supplierId
                }
            });
            if (!supplier) {
                return res.status(404).json({ 'message': 'Fournisseur non retrouvé' });
            }
    
            await supplier.destroy();
            return res.status(200).json({ 'message': 'Fournisseur supprimé avec succès' });
        } catch (error) {
            return res.status(401).json({ 'message': 'Cannot delete supplier', 'error': error });
        }
    },

    editProfile: async(req, res) => {
        const supplierId = req.params.idToEdit;
        const { supplier_name, supplier_email, supplier_phone } = req.body;
    
        try {
            const supplierFound = await Suppliers.findByPk(supplierId);
    
            if (!supplierFound) {
                return res.status(404).json({ error: 'Supplier not found' });
            }

            const updates = {};
            if(supplier_name){
                updates.supplier_name = supplier_name;
            }

            if(supplier_email){
                updates.supplier_email = supplier_email;
            }

            if(supplier_phone){
                updates.supplier_phone = supplier_phone;
            }
    
            const supplierFoundUpdate = await supplierFound.update({
                supplier_name: updates.supplier_name,
                contact_email: updates.supplier_email,
                contact_phone: updates.supplier_phone
            });
    
            res.status(200).json({'results': supplierFoundUpdate});
        } catch (error) {
            res.status(401).json({ error: 'Cannot update supplier' });
        }
    }
}
