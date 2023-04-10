const mongoose = require("mongoose");


const projectsSchema = mongoose.Schema ({
    clientName: String,
    branding: Array,
    profile: Array,
    
})

module.exports = mongoose.model('project', projectsSchema)