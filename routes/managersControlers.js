const sequelize = require('../models/index');

const Managers = require('../models/managers');

module.exports = {
    /**
     * Get customers specific to a store.
     * id_store is passed as a parameter in the request.
     *
     * @async
     * 
     * @param {string} req
     * @param {object} res
     * @returns {{nom: string, prenom: string, email: string, order_date: date, total_amount: number, order_id: number}[]} results
     * @throws {object} - A JSON object containing an error message in case of an error.
     */
    display: async (req, res) => {
        try {
            const results = await Managers.findAll({
                attributes: ['manager_firstname', 'manager_surname', 'manager_username', 'manager_photo' ],
            })
            
            return res.status(200).json({ 'results': results });
        } catch (error) {
            return res.status(401).json({ 'message': error.message });
        }
    }     
};
