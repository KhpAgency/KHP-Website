const mongoose = require("mongoose");

const threeDSchema = mongoose.Schema ({
    name: String,
    projectPhotos: Array,
    videoLink: String,
    
})

module.exports = mongoose.model('3d-projects', threeDSchema)