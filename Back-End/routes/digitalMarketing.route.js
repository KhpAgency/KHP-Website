const app = require("express").Router();
const clientModel = require("../model/client.model");
const digitalmodel = require("../model/digitalMarketing.model");
const digitalMiddleware = require("../middleware/digitalMarketing.middleware");

app.get("/allDigitalMarketing", async (req, res) => {
  let data = await digitalmodel.find().populate("clientID");
  if (data.length != 0) {
    res.json(data);
  } else {
    res.json({ message: "No Digital Marketing projects found" });
  }
});

app.post("/addDigitalMarketing", digitalMiddleware, async (req, res, next) => {
  let client = await clientModel.findOne({ name: req.body.clientName });

  if (client) {
    const { clientName } = req.body;
    let id = client._id;
    let digitalMarketingPhotos = req.files;
    let digitalMarketingExist = await digitalmodel.find({ name: clientName });

    if (digitalMarketingExist.length > 0) {
      res.json({
        message:
          "Digital Marketing project already exists for this client name",
      });
    } else {
      let digitalProject = await digitalmodel.insertMany({
        name: clientName,
        clientID: id,
        digitalPhotos: digitalMarketingPhotos,
      });
      res.json({ message: "success", data: digitalProject[0] });
    }
    next();
  } else {
    res.json({ message: "No client found" });
  }
});

app.delete("/deleteDigitalMarketing", async (req, res) => {
  if (
    req.body.clientName == undefined ||
    req.body.clientName == "undefined" ||
    req.body.clientName == ""
  ) {
    res.json({ message: "Choose a client!" });
  } else {
    await digitalmodel.deleteOne({ name: req.body.clientName });

    res.json({
      message: `media production project for client ${req.body.clientName} deleted successfully`,
    });
  }
});
module.exports = app;
