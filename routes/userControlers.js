const bcrypt = require('bcrypt');
const jwtUtils = require('../utils/jwt.utils');
const Managers = require('../models/managers');
const Customers = require('../models/customers');
// const asyncLib = require('async');
const { Op } = require('sequelize'); 

// Constants
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*\d).{4,8}$/;

// Routes
module.exports = {
    register: async function (req, res) {

        const { nom, prenom, email, password, username } = req.body;

        if (nom == null || prenom == null || email == null || password == null || username == null ) {
            return res.status(402).json({ 'message': 'Paramètres manquants' });
        }

        if (username.length >= 13 || username.length <= 4) {
            return res.status(402).json({ 'message': 'Username invalide (doit être compris entre 5 - 12 caractères)' });
        }

        if (!EMAIL_REGEX.test(email)) {
            return res.status(402).json({ 'message': 'Email non valide' });
        }

        if (!PASSWORD_REGEX.test(password)) {
            return res.status(402).json({ 'message': 'Password invalide (entre 4 - 8 caractères incluant un nombre au moins)' });
        }

        try {
            const customerFound = await Customers.findOne({
                where: {
                   [Op.or]: [{ username: username }, {email: email}]
                }
            });

            if (customerFound) {
                return res.status(405).json({ 'message': 'Ce username ou email est déjà utilisé' });
            }
    
            const bcryptedPassword = await bcrypt.hash(password, 5);
    
            const newCustomer = await Customers.create({
                email: email,
                username: username,
                password: bcryptedPassword,
                nom: nom,
                prenom: prenom
            });
    
            return res.status(201).json({
                'results': newCustomer.customer_id,
            });
        } catch (error) {
            return res.status(401).json({ 'message': 'cannot add user' });
        }
    },

    login: async function (req, res) {
        const { password, email } = req.body;
        if (email == null || password == null) {
            return res.status(403).json({ 'message': 'Paramètres manquants' });
        }
        try {
        
            const customerFound = await Customers.findOne({
                where: { email: email }
            });
            
            const managerFound = await Managers.findOne({
                where: { manager_email: email }
            });
            
            if (managerFound) {
                const resBycrypt = await bcrypt.compare(password, managerFound.manager_password);
                
                if (resBycrypt) {
                    return res.json({
                        'results': managerFound.manager_id,
                        'token': jwtUtils.generateTokenForUser(managerFound, '1'),
                        'role': 'manager'
                    });
                } else {
                    return res.status(402).json({ 'message': 'Password incorrect' });
                }
            }  else if (customerFound) {
                 const resBycrypt = await bcrypt.compare(password, customerFound.password);
                
                if (resBycrypt) {
                    return res.json({
                        'results': customerFound.customer_id,
                        'token': jwtUtils.generateTokenForUser(customerFound, '2'),
                        'role': 'customer'
                    });
                } else {
                    return res.status(402).json({ 'message': 'Password incorrect' });
                }
            }  else {
                return res.status(402).json({ 'message': 'User non existant dans la base de données' });
            }
        } catch (error) {
            return res.status(401).json({ 'message': 'Impossible de verifier cet user' });
        }
    },
    getUserProfile: async function(req, res) {
        // Getting auth header
        // const headerAuth  = req.headers['Authorization'];
        const user = jwtUtils.getUserId(req.params.token);
        
        // console.log(headerAuth)
        // console.log(req.params.token)
        
        console.log(user)

        if (user.userId < 0)
          return res.status(401).json({ 'error': 'wrong token' });
          
          
        if(user.userRole === 1){
            try{
                const manager = await Managers.findOne({
                    attributes: [ 'manager_username', 'manager_firstname', 'manager_surname', 'manager_email', 'manager_phone'],
                    where: { manager_id: user.userId }
                  });
              if(manager){
                return res.status(201).json({'results': manager});
              } else {
                return res.status(404).json({ 'message': 'user not found' });
              }
            } catch (error) {
                return  res.status(401).json({ 'message': 'cannot fetch user' });
            }
        } else if( user.userRole === 2){
            try{
                const customer = await Customers.findOne({
                    attributes: [ 'username', 'nom', 'prenom', 'email'],
                    where: { customer_id: user.userId }
                  });
              if(customer){
                return res.status(201).json({'results': customer});
              } else {
                return res.status(404).json({ 'message': 'user not found' });
              }
            } catch (error) {
                return  res.status(401).json({ 'message': 'cannot fetch user' });
            }
        }


    },

    updateUserProfile: async function(req, res) {
        const headerAuth = req.headers['authorization'];
        const user = jwtUtils.getUserId(headerAuth);
    
        const { email, username, contact } = req.body;
        
        if(user.userRole == 1){
            const managerFound = await Managers.findOne({
                where: { manager_id: user.userId }
            })
            .then(managerFound => {
                if (managerFound) {
                    const updates = {};
        
                    if (email) {
                        updates.email = email;
                    }
                    if (username) {
                        updates.username = username;
                    }
                    // if (contact) {
                    //     updates.contact = contact;
                    // }
        
                    managerFound.update(updates)
                    .then(updatedUser => {
                        res.status(201).json({'results': ''});
                    })
                    .catch(err => {
                        res.status(500).json({ 'message': 'Le profil ne peut pas etre mis à jour' });
                    });
                } else {
                    res.status(404).json({ 'message': 'User non retrouvé' });
                }
            })
            .catch(err => {
                res.status(401).json({ 'message': 'Impossible de contacter le serveur' });
            });
        } else if (user.userRole == 2) {
            const customerFound = await Customers.findOne({
                where: { customer_id: user.userId }
            })
            .then(customerFound => {
                if (customerFound) {
                    const updates = {};
        
                    if (email) {
                        updates.email = email;
                    }
                    if (username) {
                        updates.username = username;
                    }
                    // if (contact) {
                    //     updates.contact = contact;
                    // }
        
                    customerFound.update(updates)
                    .then(updatedUser => {
                        res.status(201).json({'results': ''});
                    })
                    .catch(err => {
                        res.status(500).json({ 'message': 'Le profil ne peut pas etre mis à jour' });
                    });
                } else {
                    res.status(404).json({ 'message': 'User non retrouvé' });
                }
            })
            .catch(err => {
                res.status(401).json({ 'message': 'Impossible de contacter le serveur' });
            });
        }
    }
}
