const express= require("express")
const user =require("../models/user")
const { Register, Getuser, Login, Deleteuser, Edituser, Getone, Logout, GetProfile } = require("../controlles/userControlle")
const { validation, loginvalidation, registervalidation } = require("../middleware/validator")
const { isAuth } = require("../middleware/isAuth")
const userRoutes= express.Router()

userRoutes.post("/register",registervalidation,validation,Register)
userRoutes.post("/login",loginvalidation,validation,Login)
userRoutes.get("/logout",Logout)
userRoutes.get("/current",isAuth)
userRoutes.get("/",Getuser)
userRoutes.delete("/:id",Deleteuser)
userRoutes.put("/edit/:id",Edituser)
userRoutes.post("/filter",Getone)
userRoutes.post("/filter/:id",GetProfile)


module.exports=userRoutes