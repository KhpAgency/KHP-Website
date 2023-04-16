const express = require("express");
const mongoose = require("mongoose");
const app = express();
const multer = require('multer');
const port = 3000;
const cors = require("cors")

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


mongoose.connect("mongodb+srv://admin:07775666@magdy.pbupj.mongodb.net/KHP", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(require('./routes/client.route'));
app.use(require('./routes/projects.route'));
app.use(require('./routes/3d.route'));
app.use(require('./routes/4d.route'));
app.use(require('./routes/animation.route'));
app.use(require('./routes/websites.route'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
