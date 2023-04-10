const mongoose = require("mongoose");

const clientSchema = mongoose.Schema ({
    name: String,
    logo: String,
    cover: String,
    
})

module.exports = mongoose.Schema('client', clientSchema)