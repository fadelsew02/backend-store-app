const Items = require('../models/items'); 

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
