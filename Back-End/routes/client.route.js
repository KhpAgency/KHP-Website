const app = require("express").Router();
const clientModel = require("../model/client.model");
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
  console.log(req.body.clientName);
  if (req.body.clientName !== undefined) {
    await clientModel.deleteOne({ name: req.body.clientName });
    res.json({ message: "Client deleted successfully" });
  } else {
    res.json({ message: "Choose a client to delete!" });
  }
});

module.exports = app;
