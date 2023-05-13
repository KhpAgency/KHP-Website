const app = require("express").Router();
const clientModel = require("../model/client.model");
const animationModel = require("../model/animation.model");

app.get("/allAnimation", async (req, res) => {
  let data = await animationModel.find().populate("clientID");
  if (data.length != 0) {
    res.json(data);
  } else {
    res.json({ message: "No Animation projects found" });
  }
});

app.post("/addAnimation", async (req, res, next) => {
  let client = await clientModel.findOne({ name: req.body.clientName });

  if (client) {
    let id = client._id;
    let animationExist = await animationModel.find({
      name: req.body.clientName,
    });

    if (animationExist.length > 0) {
      res.json({
        message: "animation project already exists for this client name",
      });
    } else {
      let animationProject = await animationModel.insertMany({
        name: req.body.clientName,
        clientID: id,
        videosLinks: req.body.animationUrl,
      });
      res.json({ message: "success", data: animationProject[0] });
    }
    next();
  } else {
    res.json({ message: "No client found" });
  }
});

app.delete("/deleteAnimation", async (req, res) => {
  if (
    req.body.clientName == undefined ||
    req.body.clientName == "undefined" ||
    req.body.clientName == ""
  ) {
    res.json({ message: "Choose a client!" });
  } else {
    await websiteModel.deleteOne({ name: req.body.clientName });

    res.json({
      message: `media production project for client ${req.body.clientName} deleted successfully`,
    });
  }
});

module.exports = app;
