const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

//Kayıt Ol
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
     
  });
  try{
    const savedUser = await newUser.save();
  res.status(201).json(savedUser);
  }catch (err){
    res.status(500).json(err);
  }
});

//Giriş Yap

router.post("/login" , async (req,res) => {
  try{
    const user = await User.findOne({username: req.body.username});
    !user && res.status(401).json("Hatalı Bilgiler");

    const OriginalPassword = user.password;
    OriginalPassword !== req.body.password && 
      res.status(401).json("Hatalı Bilgiler");

      const accessToken = jwt.sign({
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      {expiresIn:"3d"}
      );
      
      const {password, ...others} = user._doc;
    res.status(200).json({...others,accessToken});
  } catch (err){
    res.status(500).json(err);
  }
})

module.exports = router;
