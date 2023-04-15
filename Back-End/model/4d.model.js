const mongoose = require("mongoose");

const fourDSchema = mongoose.Schema ({
    name: String,
    clientID : mongoose.Schema.Types.ObjectId,
    fourDphotos: Array,
    videoLink: String,
    
})

module.exports = mongoose.model('4d-project', fourDSchema)