const app = require("express").Router();
const clientModel = require("../model/client.model");
const animationModel = require("../model/animation.model");
const addProjectMiddleware = require("../middleware/addProject.middleware");


app.post("/addAnimation",addProjectMiddleware, async (req, res) => {
  let client = await clientModel.findOne({ name: req.body.clientName });
  console.log(req.body);

  //   if (client) {
  //     const { clientName, videoLink } = req.body;
  //     let id = client._id;
  //     let animationExist = await animationModel.find({ name: clientName });

  //     if (animationExist.length > 0) {
  //       res.json({ message: "animation project already exists for this client name" });
  //     } else {
  //       let animationProject = await animationModel.insertMany({
  //         name :clientName,
  //         clientID:id,
  //         videoLinks,
  //       });
  //       res.json({ message: "success", data: animationProject[0] });
  //     }
  //     next();
  //   } else {
  //     res.json({ message: "No client found" });
  //   }
  
  res.json({ message: "test" });
});

module.exports = app;
