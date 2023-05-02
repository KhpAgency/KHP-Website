const mongoose = require("mongoose");

const eventsSchema = mongoose.Schema ({
    name: String,
    clientID : {type: mongoose.Schema.Types.ObjectId , ref:'client'},
    videosLinks: Array,
})

module.exports = mongoose.model('event', eventsSchema)