const db = require('../models');
const mongoose = require('mongoose');

module.exports = {
    findAllUsers: function (req, res) {
        db.User
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    },

    findUserById: function (req, res) {
        db.User
            .findOne({_id:req.params.id})
            .then(dbModel => {
                res.json(dbModel)
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    },

    findUserByUsername: function(req, res) {
        function escapeRegex(text) {
            const textLower = text.toLowerCase()
            return textLower.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
        };
        const regex = new RegExp(escapeRegex(req.query.search))
       
        db.User
            .findById(req.query.id)
            .then(dbModel => {
                //future: filter out current team  members
            //    const idsToFilter = dbModel.friends;
            //    idsToFilter.push(dbModel._id)
               
               db.User
                .find({username: regex})
                .then(dbModel => {
                    if(dbModel.length) {
                        let filteredSearch = dbModel.filter(user => {
                            return !idsToFilter.includes(user._id)
                        })
                        res.json(filteredSearch);
                    } else {
                        res.json({ message: 'username could not be found'})
                    }
                })
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    },

    findUserByEmail: function(req, res) {
      
        function escapeRegex(text) {
            return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
        };
        const regex = new RegExp(escapeRegex(req.params.email))
        db.User
            .find({email: regex})
            .then(dbModel => {
                if(dbModel.length) {
                    res.json(dbModel);
                } else {
                    res.json({message: 'email could not be found'});
                }
            })
        },

};