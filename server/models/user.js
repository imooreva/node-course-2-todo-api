var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {User};
