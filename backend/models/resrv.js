const mongoose = require("mongoose");

const resrvSchema = new mongoose.Schema({
  car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car' },
  datedebut: { type: String, required: true },
  datefin: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  pricetotal: { type: Number, required: true }
});

module.exports = mongoose.model("Resrv", resrvSchema);
