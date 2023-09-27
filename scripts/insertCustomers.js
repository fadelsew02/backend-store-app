const Customers = require('../models/customers'); // Assurez-vous que le chemin d'accès au modèle est correct
const bcrypt = require('bcrypt');


const insertCustomers = async () => {
    try {

        const customerData = [
            { 
                nom: 'Pain', 
                prenom: 'Jean', 
                email: 'jean.pain@example.com',
                username: 'jean_pain',
                password: await bcrypt.hash('jean@16PAIN', 5)
            },{ 
                nom: 'Smith', 
                prenom: 'Will', 
                email: 'will.smith@example.com',
                username: 'will_smith',
                password: await bcrypt.hash('will@15SMITH', 5)
            },{ 
                nom: 'Dave', 
                prenom: 'John', 
                email: 'john.dave@example.com',
                username: 'john_dave',
                password: await bcrypt.hash('john@1DAVE', 5)
            },{ 
                nom: 'Milkins', 
                prenom: 'Alice', 
                email: 'alice.milkins@example.com',
                username: 'alice_milkins',
                password:await bcrypt.hash('alice@2MILKINS', 5)
            },{ 
                nom: 'Grande', 
                prenom: 'Sara', 
                email: 'sara.grande@example.com',
                username: 'sara_grande',
                password: await bcrypt.hash('sara@3GRANDE', 5)
            },{ 
                nom: 'McArthur', 
                prenom: 'Donald', 
                email: 'donald.macarthur@example.com',
                username: 'donald_mcarthur',
                password: await bcrypt.hash('donald@4MCARTHUR', 5)
            },{ 
                nom: 'McDonald', 
                prenom: 'Ayton', 
                email: 'ayton.mcdo@example.com',
                username: 'ayton_mcdonald',
                password: await bcrypt.hash('ayton@5MCDONALD', 5) 
            },{ 
                nom: 'Curryr', 
                prenom: 'Stephen', 
                email: 'stephen.curryr@example.com',
                username: 'stephen_curryr',
                password: await bcrypt.hash('stephen@6CURRYR', 5)
            },{ 
                nom: 'Lebronn', 
                prenom: 'James', 
                email: 'james.lebronn@example.com',
                username: 'james_lebronn',
                password: await bcrypt.hash('james@7LEBRONN', 5)
            },{ 
                nom: 'Davies', 
                prenom: 'Anthony', 
                email: 'anthony.davies@example.com',
                username: 'anthony_davies',
                password: await bcrypt.hash('anthony@8DAVIES', 5)
            },{ 
                nom: 'Camello', 
                prenom: 'Anthony',
                email: 'antonycamello.doe@example.com',
                username: 'anthony_camello',
                password: await bcrypt.hash('anthony@9CAMELLO', 5)
            },{ 
                nom: 'Durantt', 
                prenom: 'Kevin', 
                email: 'kevin.durantt@example.com',
                username: 'kevin_durantt',
                password: await bcrypt.hash('kevin@10DURANTT', 5)
            },{ 
                nom: 'Deferd', 
                prenom: 'Carl', 
                email: 'carl.deferd@example.com',
                username: 'carl_deferd',
                password: await bcrypt.hash('carl@11DEFERD', 5)
            },{ 
                nom: 'Davidson', 
                prenom: 'Princess', 
                email: 'princess.davidson@example.com',
                username: 'princess_davidson',
                password: await bcrypt.hash('princess@12davidson', 5)
            },{ 
                nom: 'Azerty', 
                prenom: 'Roberto', 
                email: 'roberto.azerty@example.com',
                username: 'roberto_azerty',
                password: await bcrypt.hash('roberto@17AZERTY', 5)
            },{ 
                nom: 'Sousa', 
                prenom: 'Paolo',
                email: 'paolo.sousa@example.com',
                username: 'paolo_sousa',
                password: await bcrypt.hash('paolo@13SOUSA', 5)
            },{
                nom: 'Durrit', 
                prenom: 'James', 
                email: 'james.durrit@example.com',
                username: 'james_durrit',
                password: await bcrypt.hash('james@14DURRIT', 5)
            }
        ];

        await Customers.bulkCreate(customerData);
        console.log('Les données des clients ont été insérées avec succès.');
    } catch (error) {
        console.error('Une erreur s\'est produite lors de l\'insertion des données des clients :', error);
    }
};

module.exports = insertCustomers;
