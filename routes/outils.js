// Ajout du module express au notre fichier
const express = require('express');

// Utilisation du Router du module express
const Router = express.Router();

// http://localhost:4500/outils/calculc
Router.post('/calculc', (req, res, next) => {
    let phrase = "le chemin vers la soleil levant";
    let lettre = req.body.lettre;
    
    phrase = phrase.split('');
    let nbre_de_fois_trouve = 0;

    for(let i = 0; i < phrase.length; i++) {
        if(lettre == phrase[i])
            nbre_de_fois_trouve++;
    }

    res.status(200).json(nbre_de_fois_trouve);
});

module.exports = Router;