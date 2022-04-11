const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: 'Username Required',
        unique: true
    },
    password: {
        type: String, 
        required: 'Password is required'
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: 'Email is required'
    },
    bar: {
        type: String,
        trim: true
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;