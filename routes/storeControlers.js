// const express = require('express');
const Stores = require('../models/stores'); 
const { QueryTypes } = require('sequelize');
const sequelize = require('../models/index'); 


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
    },

    getAllStores: async (req, res) => {

        if(req.params.idStore > 0 ){
            try {
                const sqlQuery = `
                    SELECT
                        s.store_id,
                        s.store_name,
                        s.staff_count,
                        s.address,
                        s.contact_email,
                        s.contact_phone,
                        m.manager_surname,
                        m.manager_photo,
                        m.manager_firstname
                    FROM
                        "Stores" AS s
                    INNER JOIN
                        "Managers" AS m
                    ON
                        s.manager_id = m.manager_id
                    WHERE
                        s.store_id = ${req.params.idStore};
                `;
                const results = await sequelize.query(sqlQuery, { type: QueryTypes.SELECT });
    
                return res.status(200).json({ 'results': results[0] });
            } catch (error) {
                return res.status(401).json({ 'message': error });
            }
        } else {
            console.log(req.params.idStore)
            try {
                const sqlQuery = `
                    SELECT
                        s.store_id,
                        s.store_name,
                        s.staff_count,
                        s.address,
                        s.contact_email,
                        s.contact_phone,
                        m.manager_surname,
                        m.manager_photo,
                        m.manager_firstname
                    FROM
                        "Stores" AS s
                    INNER JOIN
                        "Managers" AS m
                    ON
                        s.manager_id = m.manager_id;
                `;
                const results = await sequelize.query(sqlQuery, { type: QueryTypes.SELECT });
    
                return res.status(200).json({ 'results': results });
            } catch (error) {
                return res.status(401).json({ 'message': error });
            }
        }
    }
}
