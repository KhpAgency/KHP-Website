const app = require("express").Router();
const clientModel = require("../model/client.model");


app.get('/clients', async (req, res) => {
  let allData = await clientModel.find()
  res.json({allData})
});

app.post("/addClient", async (req, res) => {
  let data = await clientModel.findOne({ name: req.body.clientName });
  let logo = req.files.logo[0].path
  let cover = req.files.cover[0].path

    if (!data) {
      //true statment
      await clientModel.insertMany({name:req.body.clientName, logo , cover})
    res.json({ message: "Success" });
    } else {
      //false statment
      res.json({ message: "client name already exists"})
    }

});

module.exports = app;
