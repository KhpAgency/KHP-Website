const app = require("express").Router();
const clientModel = require("../model/client.model");
const projectsModel = require("../model/projects.model");



  app.post('/addProject', async (req, res) => {
    let clients = await clientModel.findOne({ name: req.body.clientName });
    let id = clients._id
    console.log(id);

    let clientName = req.body.clientName
    let branding = req.files.branding
    let profile = req.files.profile

    // await projectsModel.insertMany({name: clientName, branding, profile})
    res.json({message:"sucess"})
  });


module.exports = app;
