const mongoose = require('mongoose');

const BromaSchema = new mongoose.Schema({
    texto: {
        type: String,
        required: [true, 'El texto de la broma es requerido']
    },
    autor: {
        type: String,
        required: [true, 'El autor de la broma es requerido']
    }
}, { timestamps: true });

module.exports = mongoose.model('Broma', BromaSchema);
