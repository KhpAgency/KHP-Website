const app = require("express").Router();
const clientModel = require("../model/client.model");
const addClientMiddleware = require("../middleware/addClient.middleware");

app.get("/clients", async (req, res) => {
  let allData = await clientModel.find();
  res.json({ allData });
});

app.post("/addClient", addClientMiddleware, async (req, res , next) => {
  let data = await clientModel.findOne({ name: req.body.clientName });
  let logo = req.files.logo[0].path;
  let cover = req.files.cover[0].path

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

module.exports = app;
