const app = require("express").Router();
const clientModel = require("../model/client.model");
const threeDmodel = require("../model/3d.model");
const fourDmodel = require("../model/4d.model");
const animationModel = require("../model/animation.model");
const digitalmodel = require("../model/digitalMarketing.model")
const eventsModel = require("../model/events.model");
const mediaProductionModel = require("../model/mediaProduction.model");
const projectsModel = require("../model/brandingProjects.model");
const websiteModel = require("../model/website.model");

const addClientMiddleware = require("../middleware/addClient.middleware");

app.get("/clients", async (req, res) => {
  let allData = await clientModel.find();
  if (allData.length > 0) {
    res.json(allData);
  } else {
    res.json({ message: "No Clients found" });
  }
});

app.get("/client", async (req, res) => {
  let client = await clientModel.findOne({ name: req.headers.name });
  res.json(client);
});

app.post("/addClient", addClientMiddleware, async (req, res, next) => {
  let data = await clientModel.findOne({ name: req.body.clientName });
  let logo = req.files.logo[0].path;
  let cover = req.files.cover[0].path;

  if (!data) {
    //true statment
    await clientModel.insertMany({ name: req.body.clientName, logo, cover });
    res.json({ message: "success" });
  } else {
    //false statmentss
    res.json({ message: "client name already exists" });
  }
  next();
});

app.delete("/deleteClient", async (req, res) => {
  let name = req.body.clientName;
  if (req.body.clientName !== undefined) {
    await clientModel.deleteOne({ name });
    try {
    await threeDmodel.deleteOne({ name });
    await fourDmodel.deleteOne({ name });
    await animationModel.deleteOne({ name });
    await digitalmodel.deleteOne({ name });
    await eventsModel.deleteOne({ name });
    await mediaProductionModel.deleteOne({ name });
    await projectsModel.deleteOne({ name });
    await websiteModel.deleteOne({ name });
      
    } catch (error) {
      console.log(error);
    }

    res.json({ message: "Client deleted successfully" });
  } else {
    res.json({ message: "Choose a client to delete!" });
  }
});

module.exports = app;
