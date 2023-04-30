const mongoose = require("mongoose");

const animationSchema = mongoose.Schema ({
    name: String,
    clientID : {type: mongoose.Schema.Types.ObjectId , ref:'client'},
    videosLinks: Array,
})

module.exports = mongoose.model('animation', animationSchema)