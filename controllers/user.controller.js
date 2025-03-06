
const { INTERNAL_SERVER_ERROR, OK } = require("../libs/constants");
const {userService}  =require("../services")

exports.signUp = async (req, res) => {
    try {
      const response = await userService.signUp({
        body:req.body
      });
      res
        .status(OK)
        .json({ message: "successfuly created user", user: response });
    } catch (error) {
      console.log("Failed to create user", error.message);
      res.status(error.statusCode || INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  };


  exports.signIn = async (req, res) => {
    try {
      const response = await userService.signIn({
        body:req.body
      });
      const cookieOptions = {
        secure: true,
        httpOnly: true,
      };
      const {token} = response;
      
      res.cookie("jwt",token, cookieOptions)
        .status(OK)
        .json({ message: "successfuly Singin user", user: response });
    } catch (error) {
      console.log("Failed to Singin user", error.message);
      res.status(error.statusCode || INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  };