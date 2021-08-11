const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        max: 1024,
        trim: true    
    }
});

module.exports = mongoose.model("t_users", UserSchema);