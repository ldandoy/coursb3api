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

// http://localhost:4500/outils/leplusgranddesdeux
Router.post('/leplusgranddesdeux', (req, res, next) => {
    let nb1 = parseInt(req.body.nb1);
    let nb2 = parseInt(req.body.nb2);

    if ( nb1 > nb2) {
        res.status(200).json(nb1 + " est le plus grand");
    } else if (nb1 < nb2) {
        res.status(200).json(nb2 + " est le plus grand");
    } else {
        res.status(200).json("Les deux nombres sont égaux");
    }
});

module.exports = Router;