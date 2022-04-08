const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    name: {
        type: String,
        required: 'Your menu needs a name',
        trim: true,
    },
    //date of implementation
    date: {
        type: Date,
    },
    // drinks: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'Drink'
    //     }
    // ]
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;