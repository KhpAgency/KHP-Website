const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
const cors = require("cors")
const path = require('path');

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(express.json());


mongoose.connect("mongodb+srv://khpadmin:50006000@cluster0.5psyrzk.mongodb.net/KHP", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(require('./routes/client.route'));
app.use(require('./routes/projects.route'));
app.use(require('./routes/3d.route'));
app.use(require('./routes/4d.route'));
app.use(require('./routes/animation.route'));
app.use(require('./routes/websites.route'));
app.use(require('./routes/digitalMarketing.route'));
app.use(require('./routes/mediaProduction.route'));
app.use(require('./routes/events.route'));


app.listen(process.env.PORT || PORT, () =>
  console.log(`Example app listening on port ${PORT}!`)
);
