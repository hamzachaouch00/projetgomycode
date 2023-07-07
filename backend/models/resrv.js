const mongoose = require("mongoose")

const resrvSchema = new mongoose.Schema({
    car:{type: mongoose.Schema.Types.ObjectID , ref:'cars'},
    datedebut:{type:Date,required:true},
    datefin:{type:Date,required:true},
    user:{type:mongoose.Schema.Types.ObjectID , ref:'users'},
    pricetotal:{type:Number,required:true}
    
})
module.exports=mongoose.model("resrv",resrvSchema)