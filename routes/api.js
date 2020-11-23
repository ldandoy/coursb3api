// Ajout du module express au notre fichier
const express = require('express');

// Utilisation du Router du module express
const Router = express.Router();

// http://localhost:4500/api/product
Router.get('/product', (req, res, next) => {
    let html;
    let array = ["Citron", "Banane"];

    html = "<h1>API - products !</h1><ul>";
    array.forEach(product => {
        html = html + "<li>" + product + "</li>";
    })
    html = html + "</ul>";

	res.status(200).send(html);
});

// http://localhost:4500/api/products.json
Router.get('/products.json', (req, res, next) => {
    // Création du tableau
    let array = ["Citron", "Banane"];
    
    // Renvoie du resultat au format json
    res.status(200).json(array);
})

Router.post("/product", (req, res, next) => {
    console.log(req.body);
    
    let array = ["Citron", "Banane"];

    array.push(req.body.fruit);

    res.status(200).json(array);
});

// Parcours du tableau pour la création de la variable out
Router.get('/output', (req, res, next) => {
    // Création du tableau
    let array = ["Citron", "Banane", "Fraise"];
    let out = "";
    
    // Boucle pour ajouter les produits à la variable out
    // Premier passage = Citron
    // Deuxieme affichage = Citron Banane
    // Troisieme affichage = Citron Banane Fraise
    array.forEach(product => {
        out = out + product + " ";
        console.log(out);
    });
    
    res.status(200).json(out);
})

// Export du module pour pouvoir l'intégrer dans le require
module.exports = Router;