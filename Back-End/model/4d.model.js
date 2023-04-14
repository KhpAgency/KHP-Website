const mongoose = require("mongoose");

const fourDSchema = mongoose.Schema ({
    name: String,
    projectPhotos: Array,
    videoLink: String,
    
})

module.exports = mongoose.model('4d-projects', fourDSchema)