const mongoose = require("mongoose");


const brandingProjectsSchema = mongoose.Schema ({
    clientName: String,
    clientID : mongoose.Schema.Types.ObjectId,
    branding: Array,
    profile: Array,
    
})

module.exports = mongoose.model('brandingProject', brandingProjectsSchema)