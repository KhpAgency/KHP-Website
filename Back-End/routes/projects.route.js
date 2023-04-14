const app = require("express").Router();
const clientModel = require("../model/client.model");
const projectsModel = require("../model/projects.model");
const addProjectMiddleware = require("../middleware/addProject.middleware");




  app.post('/addProject',addProjectMiddleware, async (req, res, next) => {

    let client = await clientModel.findOne({ name: req.body.clientName });
    let id = client._id
    console.log(client);

    let clientName = req.body.clientName
    let branding = req.files.branding
    let profile = req.files.profile
    let brandingPath= branding.map(item => item.path)
    let profilePath= profile.map(item => item.path)

    // await projectsModel.insertMany({clientName: clientName, id,branding: brandingPath,profile: profilePath})
    res.json({message:"sucess"})

    next()
  });


module.exports = app;
