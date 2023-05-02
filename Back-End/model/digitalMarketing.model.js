const mongoose = require("mongoose");

const digitalSchema = mongoose.Schema ({
    name: String,
    clientID : {type: mongoose.Schema.Types.ObjectId , ref:'client'},
    digitalPhotos: Array,
    
})

module.exports = mongoose.model('digitalMarketing', digitalSchema)