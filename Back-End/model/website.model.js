const mongoose = require("mongoose");

const websiteSchema = mongoose.Schema ({
    name: String,
    clientID : mongoose.Schema.Types.ObjectId,
    websitephotos: Array,
    
    
})

module.exports = mongoose.model('website', websiteSchema)