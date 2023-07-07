const {body,validationResult}=require("express-validator")



exports.registervalidation =[
    body("email","please add a valid email").notEmpty().isEmail(),
    body("password", "password least 6 caracters").notEmpty().isLength({ min: 6 }),
    body("phone", "phone at least 8 caracters").notEmpty().isLength({ min: 8 }),
    body("name", "please enter name").notEmpty(),
    body("numpermis", "numpermis least 8 caracters").notEmpty().isLength({ min: 8 }),


];
exports.loginvalidation = [
  body("email", "pls enter a valid email").isEmail(),
  body("password", "password least 6 caracters").isLength({ min: 6 }),
];
exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};