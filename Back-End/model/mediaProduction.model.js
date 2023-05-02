const mongoose = require("mongoose");

const mediaSchema = mongoose.Schema ({
    name: String,
    clientID : {type: mongoose.Schema.Types.ObjectId , ref:'client'},
    mediaPhotos: Array,
    
})

module.exports = mongoose.model('mediaProduction', mediaSchema)