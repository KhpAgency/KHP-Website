const app = require("express").Router();
const clientModel = require("../model/client.model");
const fourDmodel = require("../model/4d.model");
const add4dMiddleware = require("../middleware/add4d.middleware");

app.get("/all4d", async (req, res) => {
  let data = await fourDmodel.find().populate("clientID");
  if (data.length != 0) {
    res.json(data);
  } else {
    res.json({ message: "No 4D projects found" });
  }
});

app.post("/add4d", add4dMiddleware, async (req, res, next) => {
  let client = await clientModel.findOne({ name: req.body.clientName });

  if (client) {
    const { clientName, videoLink } = req.body;
    let id = client._id;
    let fourDphotos = req.files;
    let fourDexist = await fourDmodel.find({ name: clientName });

    if (fourDexist.length > 0) {
      res.json({ message: "4d project already exists for this client name" });
    } else {
      let fourDproject = await fourDmodel.insertMany({
        name: clientName,
        clientID: id,
        fourDphotos,
        videoLink,
      });
      res.json({ message: "success", data: fourDproject[0] });
    }
    next();
  } else {
    res.json({ message: "No client found" });
  }
});

app.delete("/delete4d", async (req, res) => {
  if (
    req.body.clientName == undefined ||
    req.body.clientName == "undefined" ||
    req.body.clientName == ""
  ) {
    res.json({ message: "Choose a client!" });
  } else {
    await fourDmodel.deleteOne({ name: req.body.clientName });

    res.json({
      message: `media production project for client ${req.body.clientName} deleted successfully`,
    });
  }
});

module.exports = app;
