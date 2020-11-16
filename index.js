const express = require('express');
const morgan  = require('morgan');
const apiRoutes = require('./routes/api');

const PORT = 4500;

const server = express();

server.use(morgan('dev'));

// Root par default: http://localhost:4500/
server.get('/', function(req, res, next) {
	res.status(200).send("It works !");
});

server.use('/api', apiRoutes);

// http://localhost:4500/ece/helloworld
server.get('/ece/helloworld', (req, res, next) => {
	res.status(200).send("<h1>Hello world !</h1>")
});

server.listen(PORT, function() {
	console.log('Server is running on localhost:' + PORT);
});
