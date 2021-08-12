const mongoose = require('mongoose');
const ConfigSchema = new mongoose.Schema({
    copyrights:{
        type: String,
        required: true,
        trim: true
    },
    favColor:{
        type: String,
        required: true,
        trim: true
    },
    specialMsg: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model("t_configs", ConfigSchema);