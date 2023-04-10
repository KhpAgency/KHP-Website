const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));


mongoose.connect("mongodb+srv://admin:07775666@magdy.pbupj.mongodb.net/KHP", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
