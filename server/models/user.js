var mongoose = require('mongoose');

var User = mongoose.model('User', {
    name: {
        type: String,
        minlength: 1,
        trim: false
    },
    email: {
        type: String,
        minlength: 1,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        min: 0
    }
});

module.exports = {User}