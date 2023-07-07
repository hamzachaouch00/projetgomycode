const express=require("express")
const { Addcar, Getcar, Deletecar, Editcar, Getone } = require("../controlles/carcontrolle")

const carRoutes=express.Router()



carRoutes.post("/post",Addcar)
carRoutes.get("/get",Getcar)
carRoutes.delete("/delete/:id",Deletecar)
carRoutes.put("/update/:id",Editcar)
carRoutes.post("/filterpost",Getone)


module.exports=carRoutes