const express = require('express');
const morgan  = require('morgan');
const apiRoutes = require('./routes/api');

const PORT = 4500;

const server = express();

// Ajout des log via le module morgan
server.use(morgan('dev'));

// Root par default: http://localhost:4500/
server.get('/', function(req, res, next) {
	res.status(200).send("It works !");
});

// Ajout du module apiRoutes
server.use('/api', apiRoutes);

// http://localhost:4500/ece/helloworld
server.get('/ece/helloworld', (req, res, next) => {
	res.status(200).send("<h1>Hello world !</h1>")
});

// Démarrage du serveur
server.listen(PORT, function() {
	console.log('Server is running on localhost:' + PORT);
});
