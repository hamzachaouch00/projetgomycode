const express=require("express")
const { Addresrv, Getresrv, Deleteresrv, Editresrv, Getone } = require("../controlles/resrvControlle")


const resrvRoutes=express.Router()



resrvRoutes.post("/post",Addresrv)
resrvRoutes.get("/get",Getresrv)
resrvRoutes.delete("/delete/:id",Deleteresrv)
resrvRoutes.put("/update/:id",Editresrv)
resrvRoutes.post("/filterpost",Getone)



module.exports=resrvRoutes