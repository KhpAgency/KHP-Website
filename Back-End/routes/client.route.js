const app = require("express").Router();
const clientModel = require("../model/client.model");


app.get('/clients', async (req, res) => {
  let allData = await clientModel.find()
  res.json({allData})
});

app.post("/addClient", async (req, res) => {
  let { clientName, logo, cover } = req.body;
  let data = await clientModel.findOne({ name: clientName });

    if (!data) {
      //true statment
      await clientModel.insertMany({name:clientName, logo , cover});
    res.json({ message: "Success" });
    } else {
      //false statment
      res.json({ message: "client name already exists"})
    }

});

module.exports = app;
