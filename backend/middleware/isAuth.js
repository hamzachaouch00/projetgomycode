const jwt = require("jsonwebtoken");
const userSchema = require("../models/user");

exports.isAuth = async (req, res, next) => {
  const token = req.header("Authorization").split(" ")[1];
  try {
    const decode = jwt.verify(token, "hello");
    if (!decode) {
      res.status(400).send("you are not auth");
    }else{
        const user = await userSchema.findById(decode.id);
        res.status(200).send(user)
        next();
    }
    
  } catch (error) {
    console.log(error)
  }
};