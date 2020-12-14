// Ajout du module mongoose pour se connecter à mongodb
const mongoose = require('mongoose')

// Ajout du module express au notre fichier
const express = require('express');

// Utilisation du Router du module express
const Router = express.Router();

const todoModel = require('../models/todo');

// GET: http://localhost:4500/db/todos
Router.get('/todos', (req, res, next) => {
    todoModel.find()
    .then(todos => {
        res.status('200').json(todos);
    })
    .catch(err => {
        console.log(err);
        res.status('500').json({"message": err});
    });
});

// POST: http://localhost:4500/db/todos
Router.post('/todos', (req, res, next) => {
    const todo = new todoModel({
        sujet: req.body.sujet,
        description: req.body.description
    });

    todo.save()
    .then(todo => {
        res.status('200').json(todo);
    })
    .catch(err => {
        console.log(err);
        res.status('500').json({"message": err});
    });
});

// GET : http://localhost:4500/db/todos/{todoId}
Router.get('/todos/:todoId', (req, res, next) => {
    todoModel.findOne({
        "_id": req.params.todoId
    })
    .then(todos => {
        res.status('200').json(todos);
    })
    .catch(err => {
        console.log(err);
        res.status('500').json({"message": err});
    });
});

// DELETE: http://localhost:4500/db/todos/{todoId}
Router.delete('/todos/:todoId', (req, res, next) => {
    todoModel.remove({
        "_id": req.params.todoId
    })
    .exec()
    .then(result => {
        res.status('200').json({"message": "Todo bien supprimée !"});
    })
    .catch(err => {
        console.log(err);
        res.status('500').json({"message": err});
    });
});

// PATCH: http://localhost:4500/db/todos/{todoId}
Router.patch('/todos/:todoId', (req, res, next) => {
    todoModel.update({
        "_id": req.params.todoId
    },{
        $set: {
            "sujet": req.body.sujet,
            "description": req.body.description,
        }
    })
    .exec()
    .then(todo => {
        res.status('200').json(todo);
    })
    .catch(err => {
        console.log(err);
        res.status('500').json({"message": err});
    });
})

// Export du module pour pouvoir l'intégrer dans le require
module.exports = Router;