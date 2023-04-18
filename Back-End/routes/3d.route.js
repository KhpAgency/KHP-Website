const app = require("express").Router();
const clientModel = require("../model/client.model");
const threeDmodel = require("../model/3d.model");
const add3dMiddleware = require("../middleware/add3d.middleware");

app.get("/all3d", async (req, res) => {
  let data = await threeDmodel.find().populate('clientID');
  if (data.length != 0) {
    res.json(data);
  } else {
    res.json({message:"No 3D projects found"});
  }
});

app.post("/add3d", add3dMiddleware, async (req, res, next) => {
  let client = await clientModel.findOne({ name: req.body.clientName });

  if (client) {
    const { clientName, videoLink } = req.body;
    let id = client._id;
    let threeDphotos = req.files;
    let threeDexist = await threeDmodel.find({ name: clientName });

    if (threeDexist.length > 0) {
      res.json({ message: "3d project already exists for this client name" });
    } else {
      let threeDproject = await threeDmodel.insertMany({
        name: clientName,
        clientID: id,
        threeDphotos,
        videoLink,
      });
      res.json({ message: "success", data: threeDproject[0] });
    }
    next();
  } else {
    res.json({ message: "No client found" });
  }
});

module.exports = app;
