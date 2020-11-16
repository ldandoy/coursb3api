// Ajout du module express au notre fichier
const express = require('express');

// Utilisation du Router du module express
const Router = express.Router();

// http://localhost:4500/api/product
Router.get('/product', (req, res, next) => {
	res.status(200).send("API - products !");
});

// http://localhost:4500/api/product.json
Router.get('/products.json', (req, res, next) => {
    // Création du tableau
    let array = ["citron", "Banane"];
    
    // Renvoie du resultat au format json
    res.status(200).json(array);
})

// Export du module pour pouvoir l'intégrer dans le require
module.exports = Router;