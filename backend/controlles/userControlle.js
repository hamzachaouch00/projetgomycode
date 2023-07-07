const userSchema = require("../models/user");
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

    exports.Register=async(req,res)=>{
        
        const {email,password}=req.body
        try {
          const found=await userSchema.findOne({email})
          if(found){
            res.status(400).send('email already exists')
          }else{
            const user = new userSchema(req.body);
            const salt=10
            const hashpass= await bcrypt.hash(password,salt)
            user.password=hashpass
            const exp=Date.now()+1000*60*60*7
            const payload={id:user._id}
            const token = jwt.sign(payload,"hello")
            await user.save();
            res.status(200).cookie("authorization",token,{
              expires:new Date (exp),
              httpOnly:true
            }).send({ msg: "user added", user,token,exp });
           
          }
        } catch (error) {
          res.status(500).send(error);
        }
      }
      exports.Login=async(req,res)=>{
        const {email,password}=req.body
        try {
          const user=await userSchema.findOne({email})
          if(!user){
            res.status(400).send("email does not exists")
          }else{
            const match=bcrypt.compareSync(password,user.password)
            if(!match){
              res.status(400).send('wrong password')
            }else{
              const exp=Date.now()+1000*60*60*7
              const payload={id:user._id}
              const token = jwt.sign(payload,"hello")
              
              res.status(200).cookie("authorization",token,{
                expires:new Date (exp),
                httpOnly:true
              }).send({msg:"logging with success",user,token})
              
            }
          }
        } catch (error) {
          console.log(error)
        }
      }
      exports.Logout=(req,res)=>{
        try {
          
          
         res.status(200).send('user logout')
        //  res.clearCookies('logout authrized')
        } catch (error) {
          console.loge(error)
          res.status(500).send("error while logging out")
          
        }



      }
      
      
      exports.Getuser = async (req, res) => {
        try {
          const user = await userSchema.find();
          res.status(200).send({ msg: "list of users", user });
        } catch (error) {
          res.status(500).send(error);
        }
      };
      exports.Deleteuser = async (req, res) => {
        try {
          await userSchema.findByIdAndDelete(req.params.id);
          res.status(200).send("user deleted");
        } catch (error) {
          res.status(500).send(error);
        }
      };
      exports.Edituser = async (req, res) => {
        try {
          const user = await userSchema.findByIdAndUpdate(req.params.id, {
            $set: req.body,
          },{new:true});
          res.status(200).send({msg:"user updated",user})
        } catch (error) {
          res.status(500).send(error);
        }
      };
      
      exports.Getone=async(req,res)=>{
          const {name}=req.body
          try {
              const user= await userSchema.find({name})
              res.status(200).send({msg:"filter",user})
          } catch (error) {
              res.status(500).send(error);
          }
      }
      exports.GetProfile=async(req,res)=>{
        const {_id}=req.body
        try {
            const user= await userSchema.find(req.params._id, {
              $set: req.body,
            },{new:true});
            res.status(200).send({msg:"user Profile",user})
        } catch (error) {
            res.status(500).send(error);
        }
    }