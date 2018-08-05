'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const RemindMeTypesOfData = new Schema({
    email: {
        type: String
    },
    date: {
        type: String
    },
    message: {
        type: String
    }
});

module.exports = mongoose.model('Remind', RemindMeTypesOfData);