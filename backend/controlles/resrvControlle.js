const resrvSchema = require("../models/resrv");

exports.Addresrv = async (req, res) => {
    try {
      const resrv = new resrvSchema(req.body);
      await resrv.save();
      res.status(200).send({ msg: "reservation added", resrv });
    } catch (error) {
      res.status(500).send(error);
    }
  };
  exports.Getresrv = async (req, res) => {
    try {
      const resrv = await resrvSchema.find();
      res.status(200).send({ msg: "list of reservation", resrv });
    } catch (error) {
      res.status(500).send(error);
    }
  };
  exports.Deleteresrv = async (req, res) => {
    try {
      await resrvSchema.findByIdAndDelete(req.params.id);
      res.status(200).send("reservation deleted");
    } catch (error) {
      res.status(500).send(error);
    }
  };
  exports.Editresrv = async (req, res) => {
    try {
      const resrv = await resrvSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      },{new:true});
      res.status(200).send({msg:"reservation updated",resrv})
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  exports.Getone=async(req,res)=>{
      const {model}=req.body
      try {
          const resrv= await resrvSchema.find({model})
          res.status(200).send({msg:"filter",resrv})
      } catch (error) {
          res.status(500).send(error);
      }
  }
