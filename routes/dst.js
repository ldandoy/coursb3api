// dst.js
// Ajouter le module express
const express = require('express');

// Utiliser le router du module express
const Router = express.Router();

// http://localhost:4500/dst/calculetva
Router.post('/calculetva', (req, res, next) => {
    let leprix = parseInt(req.body.leprix);
    let taux = parseFloat(req.body.taux);
    let TTC = ((leprix * taux)/100)+leprix;

    res.status(200).json(TTC);
});

// http://localhost:4500/dst/lesimpaires
Router.post('/lesimpaires', (req, res, next) => {
    let chiffre = parseInt(req.body.chiffre) ;
    let tab = [];

    for(let i = chiffre; i < (chiffre+20); i++){
        if(i % 2 !== 0){
            tab.push(i);
        }
    }
    res.status(200).json(tab);
     
});
// http://localhost:4500/dst/somme
Router.post('/somme',(req, res, next) => {  
    let nombre = parseInt(req.body.nombre);
    let somme = 0;

    for(let i = 0; i <= nombre; i++){
        somme += i;
    }
    res.status(200).json(somme);
});

// http://localhost:4500/dst/crypto
Router.post('/crypto', (req, res, next) => {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const messageKey = 'vigenere';
    const message = 'il faut coder cette phrase';

    let indexKey = 0;
    let cryptedMessage = [];
    message.split('').forEach ((letter, index) => {
        let keyAlphabet = alphabet.indexOf(letter);
        keyMessageKey = alphabet.indexOf(messageKey[indexKey]);
        if (indexKey == messageKey.length) {
            indexKey = 0;
        } else {
            indexKey ++;
        }

        newKey = keyAlphabet + keyMessageKey;
        if (newKey > 26) {
            newKey = newKey - 26;
        }

        console.log(index, ":", letter, " => " , keyAlphabet);
        console.log(keyMessageKey, "=>", alphabet[keyMessageKey]);
        console.log(newKey, "=>", alphabet[newKey]);
        cryptedMessage.push(alphabet[newKey]);
    });

    console.log(cryptedMessage);
});

// Retourne l'objet à la suite du require du module express
module.exports = Router;