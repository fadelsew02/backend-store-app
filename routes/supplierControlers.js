// const express = require('express');
const Suppliers = require('../models/suppliers'); // Importez le modèle Supplier


module.exports = {
    // Afficher tous les fournisseurs
    display: async (req, res) => {
        try {
            const suppliers = await Suppliers.findAll({
                attributes: ['supplier_id', 'category_id', 'supplier_name', 'contact_email', 'contact_phone' ]
              });
            return res.status(200).json({'results': suppliers});
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
    }

    
    // editProfile: async(req, res) => {
    //     const supplierId = req.params.id;
    //     const { name, address, contact } = req.body;
    
    //     try {
    //         const supplier = await Suppliers.findByPk(supplierId);
    
    //         if (!supplier) {
    //             return res.status(404).json({ error: 'Supplier not found' });
    //         }
    
    //         await supplier.update({
    //             name: name,
    //             address: address,
    //             contact: contact
    //         });
    
    //         res.status(200).json(supplier);
    //     } catch (error) {
    //         res.status(401).json({ error: 'Cannot update supplier' });
    //     }
    // }
}
