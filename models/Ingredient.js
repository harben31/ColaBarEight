const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    amount: {
        type: String,
        required: 'How much? Ozs, barspoons, dashes?',
        trim: true
    },
    ingredient: {
        type: String,
        required: 'You need an ingredient here',
        trim: true
    },
    note: {
        type: String,
        trim: true
    }
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;