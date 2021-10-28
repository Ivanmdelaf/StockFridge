const mongoose = require('mongoose');

const model_dishes = new mongoose.Schema({
    icon_food: {type: String, required: true},
    food: { type: String, required: true},
    cook_date: { type: String},
    expiry_date: { type: String}
});

module.exports = mongoose.model('dishes',model_dishes)