const mongoose = require("mongoose");

const animationSchema = mongoose.Schema ({
    name: String,
    videosLinks: Array,
})

module.exports = mongoose.model('4d-projects', animationSchema)