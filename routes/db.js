// Ajout du module mongoose pour se connecter à mongodb
const mongoose = require('mongoose')

// Ajout du module express au notre fichier
const express = require('express');

// Utilisation du Router du module express
const Router = express.Router();

// http://localhost:4500/db/connect
Router.get('/connect', (req, res, next) => {
        try {
            mongoose.connect('mongodb+srv://test-b3:test-b3@cluster0.yvbdp.mongodb.net/<dbname>?retryWrites=true&w=majority', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false
            });

            const db = mongoose.connection;
            db.on('error', console.error.bind(console, 'connection error:'));
            db.once('open', function() {
                console.log("Connected !")
            });

            res.status('200').json('Connected !')
        } catch (error) {
            console.log(error)
            process.exit(1)
        }
});

// Export du module pour pouvoir l'intégrer dans le require
module.exports = Router;