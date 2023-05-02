const app = require("express").Router();
const clientModel = require("../model/client.model");
const mediaProductionModel = require("../model/mediaProduction.model");
const mediaProductionMiddleware = require("../middleware/mediaProduction.middleware");

app.get("/allMediaProduction", async (req, res) => {
  let data = await mediaProductionModel.find().populate('clientID');
  if (data.length != 0) {
    res.json(data);
  } else {
    res.json({message:"No Media Production projects found"});
  }
});


app.post("/addMediaProduction", mediaProductionMiddleware, async (req, res, next) => {
  let client = await clientModel.findOne({ name: req.body.clientName });

  if (client) {
    const { clientName } = req.body;
    let id = client._id;
    let mediaProductionPhotos = req.files;
    let mediaProductionExist = await mediaProductionModel.find({ name: clientName });

    if (mediaProductionExist.length > 0) {
      res.json({ message: "Media Production project already exists for this client name" });
    } else {
      let mediaProject = await mediaProductionModel.insertMany({
        name: clientName,
        clientID: id,
        mediaPhotos : mediaProductionPhotos,
        });
      res.json({ message: "success", data: mediaProject[0] });
    }
    next();
  } else {
    res.json({ message: "No client found" });
  }
});

module.exports = app;
