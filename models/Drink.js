const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const drinkSchema = new Schema({
    drinkName: {
        type: String,
        trim: true
    }, 
    drinkStyle: {
        type: String,
        trim: true,
        required: 'what\'s your style?'
    },
    ingredients: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Ingredients'
        }
    ]
});

const Drink = mongoose.model('Drink', drinkSchema);

module.exports = Drink;