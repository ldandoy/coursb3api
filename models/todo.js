const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    sujet: {
        type: String,
        require: true
    },
    description: String
},{
    timestamps: true
});

module.exports = mongoose.model('todos', TodoSchema);