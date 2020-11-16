const express = require('express');

const PORT = 4500;

const server = express();

// Root par default
server.get('/', function(req, res, next) {
	res.status(200).send("It works !");
});

// /api/product
server.get('/api/product', (req, res, next) => {
	res.status(200).send("API - products !");
});

server.listen(PORT, function() {
	console.log('Server is running on localhost:' + PORT);
});

// localhost:4500/ece/helloworld
