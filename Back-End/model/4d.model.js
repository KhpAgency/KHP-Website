const mongoose = require("mongoose");

const fourDSchema = mongoose.Schema ({
    name: String,
    clientID : {type: mongoose.Schema.Types.ObjectId , ref:'client'},
    fourDphotos: Array,
    videoLink: String,
    
})

module.exports = mongoose.model('4d-project', fourDSchema)