// const express = require('express');
const Stores = require('../models/stores'); 


module.exports = {

    getStoreId: async (req, res) => {
    
        const managerId = req.params.managerId;
        
        try {
            const storeFound = await Stores.findOne({
                 attributes: ['store_id'],
                 where: {
                    manager_id: managerId
                }
            });
            return res.status(200).json({'results': storeFound});
        } catch (error) {
            return res.status(401).json({ 'message': error });
        }
    }
}
