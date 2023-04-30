const mongoose = require("mongoose");

const websiteSchema = mongoose.Schema ({
    name: String,
    clientID : {type: mongoose.Schema.Types.ObjectId , ref:'client'},
    websitephotos: Array,
    
    
})

module.exports = mongoose.model('website', websiteSchema)