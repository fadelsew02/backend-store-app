const Items = require('../models/items'); 
const Categories = require('../models/categorie'); 

module.exports = {
    display: async (req, res) => {
        const categorie = req.params.cat;
        try {
            const items = await Items.findAll({
                where: {
                    category_id: categorie
                }
            });
            return res.status(200).json({'results': items});
        } catch (error) {
            return res.status(401).json({ 'message': error });
        }
    },

    getAllCAtegory: async (req, res) => {
        const store_id = req.params.store_id;
        try {
            if(store_id > 0) {
                const items = await Items.findAll({
                    attributes: ['category_id'],
                    where: {
                        store_id: store_id
                    }
                });
                const itemSpecified = await Categories.findAll({
                    attributes: ['category_id', 'category_name'],
                    where: {
                        category_id: items[0].category_id
                    }
                })
                return res.status(200).json({'results': itemSpecified});
            } else {
                const items = await Categories.findAll({
                    attributes: ['category_id', 'category_name']
                });
                return res.status(200).json({'results': items});
            }
        } catch (error) {
            return res.status(401).json({ 'message': error });
        }
    },
    
    getAllId: async (req, res) => {
        const itemName = req.params.itemName;
        try {
            const item_id = await Items.findOne({
                attributes : ['item_id'],
                where: {
                    item_name: itemName
                }
            });
            return res.status(200).json({'results': item_id});
        } catch (error) {
            return res.status(401).json({ 'message': error });
        }
    }
}
