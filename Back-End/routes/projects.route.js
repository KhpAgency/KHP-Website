const app = require("express").Router();
const clientModel = require("../model/client.model");
const projectsModel = require("../model/brandingProjects.model");
const addProjectMiddleware = require("../middleware/addProject.middleware");

app.get('/allProjects', async (req, res) => {
  let data = await projectsModel.find().populate('clientID');
  if (data.length != 0) {
    res.json(data);
  } else {
    res.json({message:"No projects found"});
  }});

app.post("/addProject", addProjectMiddleware, async (req, res, next) => {
  let client = await clientModel.findOne({ name: req.body.clientName });
  // console.log(client);

  if (client) {
    let id = client._id;
    let clientName = req.body.clientName;
    let branding = req.files.branding;
    let profile = req.files.profile;
    let projectExist = await projectsModel.find({ clientName });
    
    if (projectExist.length > 0) {
      res.json({ message: "Projects already exist" });
    } else {
      let project = await projectsModel.insertMany({
        clientName,
        clientID:id,
        branding,
        profile,
      });
      res.json({ message: "success" , project });
    }
    next();
  } else {
    res.json({ message: "No client found" });
  }
});

module.exports = app;
