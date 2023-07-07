const carSchema = require("../models/car");

exports.Addcar = async (req, res) => {
    try {
      const car = new carSchema(req.body);
      await car.save();
      res.status(200).send({ msg: "car added", car });
    } catch (error) {
      res.status(500).send(error);
    }
  };
  exports.Getcar = async (req, res) => {
    try {
      const car = await carSchema.find();
      res.status(200).send({ msg: "list of cars", car });
    } catch (error) {
      res.status(500).send(error);
    }
  };
  exports.Deletecar = async (req, res) => {
    try {
      await carSchema.findByIdAndDelete(req.params.id);
      res.status(200).send("car deleted");
    } catch (error) {
      res.status(500).send(error);
    }
  };
  exports.Editcar = async (req, res) => {
    try {
      const car = await carSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      },{new:true});
      res.status(200).send({msg:"car updated",car})
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  exports.Getone=async(req,res)=>{
      const {model}=req.body
      try {
          const car= await carSchema.find({model})
          res.status(200).send({msg:"filter",car})
      } catch (error) {
          res.status(500).send(error);
      }
  }
