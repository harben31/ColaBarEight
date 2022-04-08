const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const drinkSchema = new Schema({
    drinkName: {
        type: String,
        trim: true
    }
});

const Drink = mongoose.model('Drink', drinkSchema);

module.exports = Drink;