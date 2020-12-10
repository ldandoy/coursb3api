const express 		= require('express');
const morgan  		= require('morgan');
const bodyParser	= require('body-parser');

const apiRoutes = require('./routes/api');
const outilsRoutes = require('./routes/outils');
const dbRoutes = require('./routes/db');

const PORT = 4500;

const server = express();

// Ajout des log via le module morgan
server.use(express.urlencoded({extended: false}));
server.use(morgan('dev'));
server.use(bodyParser.json());

// Root par default: http://localhost:4500/
server.get('/', function(req, res, next) {
	res.status(200).send("It works !");
});

// Ajout du module apiRoutes
server.use('/api', apiRoutes);
server.use('/outils', outilsRoutes);
server.use('/db/', dbRoutes);

// http://localhost:4500/ece/helloworld
server.get('/ece/helloworld', (req, res, next) => {
	res.status(200).send("<h1>Hello world !</h1>")
});

// Démarrage du serveur
server.listen(PORT, function() {
	console.log('Server is running on localhost:' + PORT);
});
