const mongoose = require('mongoose');
const QuoteSchema = new mongoose.Schema({
    quote:{
        type: String,
        required: true,
        trim: true
    },
    source:{
        type: String,
        required: true,
        trim: true
    }

});

module.exports = mongoose.model("t_quotes", QuoteSchema);