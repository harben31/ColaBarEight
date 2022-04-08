const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User')

const teamSchema = new Schema({
    teamName: {
        type: String,
        trim: true,
        required: 'You Team Needs a Cool Name'
    },
    users: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;