const mongoose = require('mongoose');
const GreetingSchema = new mongoose.Schema({
    hours:{
        type: Number,
        required: true,
        trim: true
    },
    text:{
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model("t_greetings", GreetingSchema);