const mongoose = require("mongoose");


const brandingProjectsSchema = mongoose.Schema ({
    clientName: String,
    clientID : {type: mongoose.Schema.Types.ObjectId , ref:'client'},
    branding: Array,
    profile: Array,
    
})

module.exports = mongoose.model('brandingProject', brandingProjectsSchema)