const express = require("express");
const mongoose = require("mongoose");
const app = express();
const multer = require('multer');
const port = 3000;




const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + Math.random() * 100 + file.originalname);
  },
});

function fileFilter(req, file, cb) {
  if (
    file.mimetype == 'image/png' ||
    file.mimetype == 'image/jpg' ||
    file.mimetype == 'image/jpeg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const upload = multer({ dest: 'uploads', storage, fileFilter });


app.use(
  upload.fields([
    { name: 'logo', maxCount: 1 },
    { name: 'cover', maxCount: 1 },
  ])
);


mongoose.connect("mongodb+srv://admin:07775666@magdy.pbupj.mongodb.net/KHP", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(require('./routes/addClient.route'));



app.listen(port, () => console.log(`Example app listening on port ${port}!`));
