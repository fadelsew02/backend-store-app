const Categories = require('../models/categorie'); // Assurez-vous que le modèle de catégorie est correctement importé

const insertCategories = async () => {
    try {

        const categoriesData = [
            { category_name: 'Vetements', description: 'Articles de mode pour hommes, femmes et enfants.' },
            { category_name: 'Electronique', description: 'Appareils electroniques tels que smartphones, ordinateurs, etc.' },
            { category_name: 'Alimentation', description: 'Aliments et boissons divers.' },
            { category_name: 'Beaute', description: 'Produits de beaute et soins personnels.' },
            { category_name: 'Maison', description: 'Articles pour la maison et la decoration.' },
            { category_name: 'Sport', description: 'Equipements et vetements de sport.' },
            { category_name: 'Sante', description: 'Produits de sante et de bien-etre.' },
            { category_name: 'Art', description: 'Œuvres Art et fournitures artistiques.' },
            { category_name: 'Animaux', description: 'Produits pour animaux de compagnie.' },
            { category_name: 'Outils', description: 'Outils et equipements pour le bricolage.' }
        ];
        
        await Categories.bulkCreate(categoriesData);
        console.log('Categories inserted successfully');
    } catch (error) {
        console.error('Error inserting categories:', error);
    }
};

module.exports = insertCategories;
