const express = require("express");
const app = express();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/media-production");
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

const upload = multer({ dest: "uploads/media-production", storage, fileFilter });

module.exports = app.use(
  upload.array("mediaProductionPhotos")
);
