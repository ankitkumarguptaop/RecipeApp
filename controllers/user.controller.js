
const { INTERNAL_SERVER_ERROR, OK } = require("../libs/constants");
const {userService}  =require("../services")

exports.createUser = async (req, res) => {
    try {
      const response = await userService.createUser({
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