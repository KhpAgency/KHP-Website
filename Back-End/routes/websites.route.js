const app = require("express").Router();
const clientModel = require("../model/client.model");
const websiteModel = require("../model/website.model");
const websiteMiddleware = require("../middleware/website.middleware");

app.get("/allWebsites", async (req, res) => {
  let data = await websiteModel.find().populate("clientID");
  // console.log(data.length);
  if (data.length != 0) {
    res.json(data);
  } else {
    res.json("No websites found");
  }
});

app.post("/addWebsite", websiteMiddleware, async (req, res, next) => {
  let client = await clientModel.findOne({ name: req.body.clientName });

  if (client) {
    const { clientName } = req.body;
    let id = client._id;
    let websitephotos = req.files;
    let websiteExist = await websiteModel.find({ name: clientName });

    if (websiteExist.length > 0) {
      res.json({ message: "website already exists for this client name" });
    } else {
      let website = await websiteModel.insertMany({
        name: clientName,
        clientID: id,
        websitephotos,
      });
      res.json({ message: "success", data: website[0] });
    }
    next();
  } else {
    res.json({ message: "No client found" });
  }
});

app.delete("/deleteWebsite", async (req, res) => {
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
