const express = require("express");
const app = express();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/digital-marketing");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + Math.random() * 100 + file.originalname);
  },
});

function fileFilter(req, file, cb) {
  if (
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpg" ||
    file.mimetype == "image/jpeg"||
    file.mimetype == "image/webp" 

  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

const upload = multer({ dest: "uploads/digital-marketing", storage, fileFilter });

module.exports = app.use(
  upload.array("digitalMarketingPhotos")
);
