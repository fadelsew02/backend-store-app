const Items = require('../models/items'); // Assurez-vous d'importer les modèles correctement
const Categories = require('../models/categorie'); // Assurez-vous d'importer les modèles correctement
const Stores = require('../models/stores'); // Assurez-vous d'importer les modèles correctement

const insertItemData = async () => {
    try {

        const categories = await Categories.findAll();
        const stores = await Stores.findAll();

        const itemData = [
            {
                item_name: 'Toile vierge',
                category_id: categories[7].category_id,
                // store_id: stores[0].store_id,
                price: 9.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/3d-render-toile-vierge-table-bois-fond-papier-peint-grunge_1048-5483.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Pinceaux a peinture',
                category_id: categories[7].category_id,
                // store_id: stores[1].store_id,
                price: 14.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/vue-dessus-aquarelle-coloree-espace-copie_23-2148419553.jpg?size=626&ext=jpg&ga=GA1.2.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Crayons de couleurs',
                category_id: categories[7].category_id,
                // store_id: stores[1].store_id,
                price: 14.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/vue-dessus-aquarelle-coloree-espace-copie_23-2148419553.jpg?size=626&ext=jpg&ga=GA1.2.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Kit de sculpture',
                category_id: categories[7].category_id,
                // store_id: stores[2].store_id,
                price: 11.99,
                url_photo: 'https://img.freepik.com/photos-premium/lieu-travail-artisan-moderne-sculptures-argile-gypse_274679-41120.jpg?size=626&ext=jpg&ga=GA1.2.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Palettes de peinture',
                category_id: categories[7].category_id,
                // store_id: stores[3].store_id,
                price: 14.99,
                url_photo: 'https://img.freepik.com/vecteurs-libre/pinceaux-palette-couleurs_1308-126704.jpg?size=626&ext=jpg&ga=GA1.2.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Set Aquarelles',
                category_id: categories[7].category_id,
                // store_id: stores[4].store_id,
                price: 13.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/coups-pinceau-aquarelle-colore_23-2148177034.jpg?size=626&ext=jpg&ga=GA1.2.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Chevalet en bois',
                category_id: categories[7].category_id,
                // store_id: stores[5].store_id,
                price: 4.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/toile_23-2147781647.jpg?size=626&ext=jpg&ga=GA1.2.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Marqueurs permanents',
                category_id: categories[7].category_id,
                // store_id: stores[6].store_id,
                price: 9.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/differents-marqueurs-colores-accessoires-bureau-affaires-table-bureau-blanc-vue-dessus_1220-1509.jpg?size=626&ext=jpg&ga=GA1.2.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Canevas pre-imprime',
                category_id: categories[7].category_id,
                // store_id: stores[7].store_id,
                price: 14.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/peinture-jaune-noire-peut-etre-utilisee-pour-creer-peinture-jaune-noire_1340-27353.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Easels pliants',
                category_id: categories[7].category_id,
                // store_id: stores[8].store_id,
                price: 11.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/composition-studio-art-moderne_23-2147868322.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Croquettes pour chiens',
                category_id: categories[8].category_id,
                // store_id: stores[9].store_id,
                price: 14.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/composition-nourriture-pour-animaux-compagnie-nature-morte_23-2148982345.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Litiere pour chat',
                category_id: categories[8].category_id,
                // store_id: stores[0].store_id,
                price: 13.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/tir-isole-chat-roux-regardant-avant-se-trouvant-interieur-bol-nourriture-pour-animaux-compagnie_181624-39433.jpg?size=626&ext=jpg&ga=GA1.2.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Collier pour chien',
                category_id: categories[8].category_id,
                // store_id: stores[1].store_id,
                price: 4.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/laisse-chien-isole-blanc-gros-plan_93675-128987.jpg?size=626&ext=jpg&ga=GA1.2.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Jouet à mâcher',
                category_id: categories[8].category_id,
                // store_id: stores[2].store_id,
                price: 9.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/fond-pate-modeler-poulpe_23-2149700404.jpg?size=626&ext=jpg&ga=GA1.2.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Harnais pour chat',
                category_id: categories[8].category_id,
                // store_id: stores[3].store_id,
                price: 14.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/balle-pres-trucs-chien_23-2147799893.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Aquarium en verre',
                category_id: categories[8].category_id,
                // store_id: stores[4].store_id,
                price: 11.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/grand-aquarium-verre-ia-generative-poissons_169016-28881.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Nourriture pour poisson',
                category_id: categories[8].category_id,
                // store_id: stores[5].store_id,
                price: 14.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/vue-dessus-aperitifs-fruits-mer-crevettes-calmars-poisson-sauces-salade-legumes_141793-4123.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Cage pour oiseau',
                category_id: categories[8].category_id,
                // store_id: stores[6].store_id,
                price: 13.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/cage-metal-ornee-blanc-vintage-reception-mariage_8353-79.jpg?size=626&ext=jpg&ga=GA1.2.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Accessoires pour rongeurs',
                category_id: categories[8].category_id,
                // store_id: stores[7].store_id,
                price: 4.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/nature-morte-jouets-pour-animaux-compagnie_23-2149371258.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Terrarium reptile',
                category_id: categories[8].category_id,
                // store_id: stores[8].store_id,
                price: 9.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/poissons-sous-marins-dans-conception-aquatique-nature-nageant-elegance-ia-generative_188544-8370.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Tournevis multifonctions',
                category_id: categories[9].category_id,
                // store_id: stores[9].store_id,
                price: 14.99,
                url_photo: 'https://img.freepik.com/photos-premium/3d-screwdriver-with-white-background_951075-337.jpg?size=626&ext=jpg&ga=GA1.2.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Marteau en acier',
                category_id: categories[9].category_id,
                // store_id: stores[0].store_id,
                price: 11.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/marteau-metallic_1048-2457.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Scie circulaire',
                category_id: categories[9].category_id,
                // store_id: stores[1].store_id,
                price: 14.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/homme-utilisation-electrique-scie-menuiserie-magasin_144627-32798.jpg?size=626&ext=jpg&ga=GA1.2.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Niveau à bulle',
                category_id: categories[9].category_id,
                // store_id: stores[2].store_id,
                price: 13.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/arrangement-sujet-chimie-nature-morte_23-2149048946.jpg?size=626&ext=jpg&ga=GA1.2.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Pince réglable',
                category_id: categories[9].category_id,
                // store_id: stores[3].store_id,
                price: 4.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/disposition-outils-mecaniques-vue-dessus_23-2149552380.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Ruban à mesurer',
                category_id: categories[9].category_id,
                // store_id: stores[5].store_id,
                price: 9.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/metre-ruban-jaune-fond-bleu_23-2148212658.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Perceuse électrique',
                category_id: categories[9].category_id,
                // store_id: stores[6].store_id,
                url_photo: 'https://img.freepik.com/photos-gratuite/homme-equipement-protection-securite-perceuse_23-2148908412.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                price: 14.99,
                stock_quantity: 30
            },
            {
                item_name: 'Ciseaux à bois',
                category_id: categories[9].category_id,
                // store_id: stores[7].store_id,
                price: 11.99,
                url_photo: 'https://img.freepik.com/photos-premium/ciseaux-dores-planche-bois-vintage_275559-16070.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Ponceuse orbitale',
                category_id: categories[9].category_id,
                // store_id: stores[8].store_id,
                price: 14.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/menuisier-utilisant-scie-circulaire-pour-couper-planches-bois-details-construction-travailleur-masculin-homme-tout-faire-outils-electriques_155003-22926.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=sph',
                stock_quantity: 30
            },
            {
                item_name: 'Etabli pliable',
                category_id: categories[9].category_id,
                // store_id: stores[9].store_id,
                price: 13.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/support-plante-bois-cactus-cote_53876-110324.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Ballon de soccer',
                category_id: categories[5].category_id,
                // store_id: stores[0].store_id,
                price: 4.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/ballon-soccer-detaille-icone-football-isole_268835-1351.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Raquette de tennis',
                category_id: categories[5].category_id,
                // store_id: stores[1].store_id,
                price: 9.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/raquette-tennis-equipement-sport-rendu-3d-balle-fond-blanc_460848-13095.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Velo de montagne',
                category_id: categories[5].category_id,
                // store_id: stores[2].store_id,
                price: 14.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/noir-equitation-ciel-loisirs-velo_1150-1015.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Tapis de yoga',
                category_id: categories[5].category_id,
                // store_id: stores[3].store_id,
                price: 11.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/photo-gros-plan-du-corps-jeune-femme-combinaison-rouge-debout-tapis-yoga-colores-dans-mains-dans-parc_574295-644.jpg?size=626&ext=jpg&ga=GA1.2.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Haltères ajustables',
                category_id: categories[5].category_id,
                // store_id: stores[4].store_id,
                price: 14.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/gros-halteres-blanc_144627-24203.jpg?size=626&ext=jpg&ga=GA1.2.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Chaussures de courses',
                category_id: categories[5].category_id,
                // store_id: stores[5].store_id,
                price: 13.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/paire-baskets_144627-3800.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Planche de surf',
                category_id: categories[5].category_id,
                // store_id: stores[6].store_id,
                price: 4.99,
                url_photo: 'https://img.freepik.com/photos-premium/three-surfboards-with-different-designs-on-them-are-lined-up-generative-ai_925897-13048.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Gants de boxe',
                category_id: categories[5].category_id,
                // store_id: stores[7].store_id,
                price: 9.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/gants-boxe-blancs-isoles_181624-18228.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Corde à sauter',
                category_id: categories[5].category_id,
                // store_id: stores[8].store_id,
                price: 14.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/composition-gymnastique-moderne-elements-sport_23-2147913638.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Equipements de musculation',
                category_id: categories[5].category_id,
                // store_id: stores[9].store_id,
                price: 11.99,
                url_photo: 'https://img.freepik.com/photos-premium/salle-sport-appareil-musculation-poids-dessus_873925-14754.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Vitamines',
                category_id: categories[6].category_id,
                // store_id: stores[0].store_id,
                price: 14.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/arrangement-pilules-jaunes_23-2149080569.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=sph',
                stock_quantity: 30
            },
            {
                item_name: 'Thé vert biologique',
                category_id: categories[6].category_id,
                // store_id: stores[1].store_id,
                price: 13.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/plaque-feuille-objet-bois-saine-alimentation_1172-451.jpg?size=626&ext=jpg&ga=GA1.2.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Pillules de probiotiques',
                category_id: categories[6].category_id,
                // store_id: stores[2].store_id,
                price: 4.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/bouteille-pilules-verre-eau_23-2148504659.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Balance numérique',
                category_id: categories[6].category_id,
                // store_id: stores[3].store_id,
                price: 9.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/balance-digitale_74190-5136.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Huile oméga-3',
                category_id: categories[6].category_id,
                // store_id: stores[4].store_id,
                price: 14.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/pilules-blanc_144627-15772.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Barres protéinées',
                category_id: categories[6].category_id,
                // store_id: stores[5].store_id,
                price: 11.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/tas-gaufres-au-sesame-isole-blanc_114579-11924.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Tapis Yoga',
                category_id: categories[6].category_id,
                // store_id: stores[6].store_id,
                price: 14.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/photo-gros-plan-du-corps-jeune-femme-combinaison-rouge-debout-tapis-yoga-colores-dans-mains-dans-parc_574295-644.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Infusion de Camomille',
                category_id: categories[6].category_id,
                // store_id: stores[7].store_id,
                price: 13.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/delicieuse-tasse-the-angle-eleve-plantes_23-2149434089.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Cachet de magnésium',
                category_id: categories[6].category_id,
                // store_id: stores[8].store_id,
                price: 4.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/pot-verre-message_23-2147596657.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Gourde Eau reutilisable',
                category_id: categories[6].category_id,
                // store_id: stores[9].store_id,
                price: 9.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/bouteille-eau-reutilisable-blanche_53876-145536.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Crayons à sourcils',
                category_id: categories[3].category_id,
                // store_id: stores[0].store_id,
                price: 14.99,
                url_photo: 'https://img.freepik.com/photos-premium/ensemble-cils-artificiels-pour-extensions_158388-1845.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Fond de teint liquide',
                category_id: categories[3].category_id,
                // store_id: stores[1].store_id,
                price: 11.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/combinaison-textures-maquillage_23-2150039235.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Rouge à lèvres mat',
                category_id: categories[3].category_id,
                // store_id: stores[2].store_id,
                price: 14.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/pieces-cosmetiques-pour-beaute-du-visage_144627-9478.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Masques facial hydratant',
                category_id: categories[3].category_id,
                // store_id: stores[3].store_id,
                price: 13.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/femme-aux-cheveux-boucles-applique-masque-facial-nourrissant-argile-pinceau-cosmetique-sourit-doucement-pose-topless-blanc_273609-52534.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Vernis à ongles rouge',
                category_id: categories[3].category_id,
                // store_id: stores[4].store_id,
                price: 4.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/bouteille-vernis-ongles_23-2148111172.jpg?size=626&ext=jpg&ga=GA1.2.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Mascara allongeant',
                category_id: categories[3].category_id,
                // store_id: stores[5].store_id,
                price: 9.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/mascara-vue-dessus-noir-fond-gris_23-2148299644.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Gel douche parfumant',
                category_id: categories[3].category_id,
                // store_id: stores[6].store_id,
                price: 14.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/vue-face-bouteille-shampoing-plastique-couleur-creme-peut-capuchon-noir-isole-fleurs-cheveux-beaute-cosmetiques-fond-jaune-glace-bleu_140725-18097.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Crèmes anti rides',
                category_id: categories[3].category_id,
                // store_id: stores[7].store_id,
                price: 11.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/vue-face-femme-tenant-recipient-creme_23-2150100211.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Shampooing nourrissant',
                category_id: categories[3].category_id,
                // store_id: stores[8].store_id,
                price: 14.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/portrait-jeune-belle-femme-produit-beaute_23-2150331726.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Eponges de maquillage',
                category_id: categories[3].category_id,
                // store_id: stores[9].store_id,
                price: 13.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/arrangement-poudres-vue-dessus_23-2148978197.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Coussin decoratif',
                category_id: categories[4].category_id,
                // store_id: stores[1].store_id,
                price: 4.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/oreiller-fond-mobilier-elegance-contemporaine_1203-4867.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Plante interieur',
                category_id: categories[4].category_id,
                // store_id: stores[0].store_id,
                price: 9.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/plante-monstera-deliciosa-dans-pot_53876-133119.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Bougie parfumee',
                category_id: categories[4].category_id,
                // store_id: stores[2].store_id,
                price: 14.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/flacon-diffuseur-huile-aromatique-produit-spa_53876-133299.jpg?size=626&ext=jpg&ga=GA1.2.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Cadre photo en bois',
                category_id: categories[4].category_id,
                // store_id: stores[3].store_id,
                price: 11.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/cadre-bois-mince-plantes_125540-787.jpg?size=626&ext=jpg&ga=GA1.2.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Tapis en coton',
                category_id: categories[4].category_id,
                // store_id: stores[4].store_id,
                price: 14.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/tapis-gris-pour-arriere-plan_1339-7412.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Lampe de table moderne',
                category_id: categories[4].category_id,
                // store_id: stores[5].store_id,
                price: 13.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/lampe-table-vase-vase-dessus_1340-23630.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Coffret de rangement',
                category_id: categories[4].category_id,
                // store_id: stores[6].store_id,
                price: 4.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/boite-rangement_1160-469.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Miroir mural en metal',
                category_id: categories[4].category_id,
                // store_id: stores[7].store_id,
                price: 9.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/decoration-interieure-miroir-plante-pot_23-2149427960.jpg?size=626&ext=jpg&ga=GA1.2.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Horloge mural',
                category_id: categories[4].category_id,
                // store_id: stores[8].store_id,
                price: 14.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/horloge-carree-interieur-nature-morte_23-2150436141.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Panier de rangement en osier',
                category_id: categories[4].category_id,
                // store_id: stores[9].store_id,
                price: 11.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/panier-osier-isole_2829-18051.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Pain de ble entier',
                category_id: categories[2].category_id,
                // store_id: stores[1].store_id,
                price: 14.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/pain-pain-planche-decouper_23-2147852038.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Lait demi ecreme',
                category_id: categories[2].category_id,
                // store_id: stores[0].store_id,
                price: 13.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/delicieux-concept-yaourt-assiette_23-2148775696.jpg?size=626&ext=jpg&ga=GA1.2.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Pates de ble dur',
                category_id: categories[2].category_id,
                // store_id: stores[4].store_id,
                price: 4.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/pates-crues-dans-tasse-bois-rustique-marbre-gris_114579-33560.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Yaourt nature',
                category_id: categories[2].category_id,
                // store_id: stores[3].store_id,
                price: 14.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/dessert-au-yaourt-gelee-baies-fraiches_661915-491.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Pommes de terre',
                category_id: categories[2].category_id,
                // store_id: stores[2].store_id,
                price: 13.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/pomme-terre-table_144627-14824.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Jus orange frais',
                category_id: categories[2].category_id,
                // store_id: stores[6].store_id,
                price: 4.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/jus-orange-frais-dans-verre-fond-sombre_1150-45560.jpg?size=626&ext=jpg&ga=GA1.2.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Cereales au miel',
                category_id: categories[2].category_id,
                // store_id: stores[7].store_id,
                price: 14.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/cereales-dans-bol-du-lait-fond-marbre_1150-45596.jpg?size=626&ext=jpg&ga=GA1.2.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Cafe moulu',
                category_id: categories[2].category_id,
                // store_id: stores[5].store_id,
                price: 13.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/fond-cafe-cafe-moulu-cuillere-fond-cafe_1220-6298.jpg?size=626&ext=jpg&ga=GA1.2.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Thon en conserve',
                category_id: categories[2].category_id,
                // store_id: stores[9].store_id,
                price: 4.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/boites-poisson-conservees-angle-eleve_23-2148793609.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Chocolat noir',
                category_id: categories[2].category_id,
                // store_id: stores[8].store_id,
                price: 14.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/arrangement-delicieuses-tablettes-chocolat-plat_23-2149349242.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Smartphone',
                category_id: categories[1].category_id,
                // store_id: stores[0].store_id,
                price: 13.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/ecran-telephone-vide-fond-violet_53876-143196.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=sph',
                stock_quantity: 50
            },
            {
                item_name: 'Ordinateur portable',
                category_id: categories[1].category_id,
                // store_id: stores[1].store_id,
                price: 26.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/ordinateur-portable-ecran-blanc-isole-mur-blanc_231208-8594.jpg?size=626&ext=jpg&ga=GA1.2.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Casque sans fil',
                category_id: categories[1].category_id,
                // store_id: stores[2].store_id,
                price: 13.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/appareil-numerique-casque-noir_53876-96805.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'enceinte blutooth',
                category_id: categories[1].category_id,
                // store_id: stores[3].store_id,
                price: 24.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/haut-parleur-intelligent-angle-eleve-maison_23-2150171763.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Camera action',
                category_id: categories[1].category_id,
                // store_id: stores[4].store_id,
                price: 33.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/equilibrage-appareil-photo-fond-jaune_23-2150271772.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=sph',
                stock_quantity: 50
            },
            {
                item_name: 'Tablette android',
                category_id: categories[1].category_id,
                // store_id: stores[5].store_id,
                price: 40.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/affichage-minimal-tablette-studio_23-2149554961.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Ecouteurs sans fil',
                category_id: categories[1].category_id,
                // store_id: stores[6].store_id,:
                price: 43.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/gros-coup-ecouteurs-sans-fil-blanc-leur-etui-fond-blanc_181624-31412.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'Console de jeu',
                category_id: categories[1].category_id,
                // store_id: stores[7].store_id,
                price: 24.99,
                url_photo: 'https://image.shutterstock.com/image-photo/black-white-console-games-controllers-260nw-2158518975.jpg',
                stock_quantity: 30
            },
            {
                item_name: 'Imprimante multifonction',
                category_id: categories[1].category_id,
                // store_id: stores[8].store_id,
                price: 13.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/imprimante-draps-blancs_1232-570.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 50
            },
            {
                item_name: 'TV LED',
                category_id: categories[1].category_id,
                // store_id: stores[9].store_id,
                price: 22.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/paysage-montagne-ecran-ordinateur-ia-generative-au-coucher-du-soleil_188544-12127.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Chemises a carreaux',
                category_id: categories[0].category_id,
                // store_id: stores[1].store_id,
                price: 41.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/beau-vetement-manches-beaute-garcon_1203-6474.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Robe ete',
                category_id: categories[0].category_id,
                // store_id: stores[0].store_id,
                price: 15.99,
                url_photo: '',
                // url_photo: 'https://img.freepik.com/photos-gratuite/portrait-belle-femme-noire-coiffure-boucles-afro-modele-souriant-vetu-robe-ete-rouge-sexy-femme-insouciante-posant-pres-du-mur-jaune-studio-bronze-joyeux-isole_158538-24497.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Pantalons en jeans',
                category_id: categories[0].category_id,
                // store_id: stores[2].store_id,
                price: 12.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/jeans_1203-8093.jpg?size=626&ext=jpg&ga=GA1.2.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'TShirts',
                category_id: categories[0].category_id,
                // store_id: stores[3].store_id,
                price: 19.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/concept-maquette-chemise-vetements-unis_23-2149448751.jpg?size=626&ext=jpg&ga=GA1.2.262926687.1693912264&semt=sph',
                stock_quantity: 30
            },
            {
                item_name: 'Veste en cuir',
                category_id: categories[0].category_id,
                // store_id: stores[4].store_id,
                price: 17.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/rendu-nature-morte-affichage-vestes_23-2149745034.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Chaussures de sports',
                category_id: categories[0].category_id,
                // store_id: stores[5].store_id,
                price: 20.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/sneaker-coloree-est-peinte-bombe-peinture-aerosol-violette_123827-23438.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Jupes plissees',
                category_id: categories[0].category_id,
                // store_id: stores[6].store_id,
                price: 41.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/belle-femme-elegante-souriante-posant-pour-camera_259150-58979.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Chemisiers en soies',
                category_id: categories[0].category_id,
                // store_id: stores[7].store_id,
                price: 12.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/vue-chemise-hawaienne-cintre-guirlande_23-2149366042.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Costume elegant',
                category_id: categories[0].category_id,
                // store_id: stores[8].store_id,
                price: 14.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/jeune-homme-affaires-africain-costume-chic_1303-18449.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            },
            {
                item_name: 'Jeans skinny',
                category_id: categories[0].category_id,
                // store_id: stores[9].store_id,
                price: 9.99,
                url_photo: 'https://img.freepik.com/photos-gratuite/photo-studio-fille-noire-sautant-expression-visage-heureux-fond-orange-vif-portant-jean-baskets-blanches-chemise-rouge_273443-47.jpg?size=626&ext=jpg&ga=GA1.1.262926687.1693912264&semt=ais',
                stock_quantity: 30
            }
        ];


        const itemsPerStore = Math.ceil(itemData.length / stores.length);
        let currentIndex = 0;

        for (const store of stores) {
            const itemsForStore = itemData.slice(currentIndex, currentIndex + itemsPerStore);
            currentIndex += itemsPerStore;

            await Items.bulkCreate(itemsForStore.map(item => ({
                ...item,
                store_id: store.store_id
            })));
        }

        console.log('Data inserted successfully.');
    } catch (error) {
        console.error('Error inserting data:', error);
    }
};

module.exports = insertItemData;
