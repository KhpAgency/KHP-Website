const mongoose = require("mongoose");

const threeDSchema = mongoose.Schema ({
    name: String,
    clientID : {type: mongoose.Schema.Types.ObjectId , ref:'client'},
    threeDphotos: Array,
    videoLink: String,
    
})

module.exports = mongoose.model('3d-project', threeDSchema)