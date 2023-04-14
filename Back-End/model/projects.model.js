const mongoose = require("mongoose");


const projectsSchema = mongoose.Schema ({
    clientName: String,
    clientID : mongoose.Schema.Types.ObjectId,
    branding: Array,
    profile: Array,
    
})

module.exports = mongoose.model('project', projectsSchema)