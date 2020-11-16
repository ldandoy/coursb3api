const express = require('express');

const Router = express.Router();

// http://localhost:4500/api/product
Router.get('/api/product', (req, res, next) => {
	res.status(200).send("API - products !");
});

module.exports = Router;