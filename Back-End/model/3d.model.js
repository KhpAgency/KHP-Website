const mongoose = require("mongoose");

const threeDSchema = mongoose.Schema ({
    name: String,
    clientID : mongoose.Schema.Types.ObjectId,
    threeDphotos: Array,
    videoLink: String,
    
})

module.exports = mongoose.model('3d-project', threeDSchema)