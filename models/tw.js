const mongoose = require("mongoose");

const TwSchema = new mongoose.Schema({
    message: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, required: true },
    like: { type: Number },
    rt: { type: Number },
    twId: { type: Schema.Types.ObjectId }
}, {
    timestamps: true
});

module.exports = mongoose.model('tws', TwSchema);