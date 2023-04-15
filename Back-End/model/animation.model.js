const mongoose = require("mongoose");

const animationSchema = mongoose.Schema ({
    name: String,
    clientID : mongoose.Schema.Types.ObjectId,
    videosLinks: Array,
})

module.exports = mongoose.model('animation', animationSchema)