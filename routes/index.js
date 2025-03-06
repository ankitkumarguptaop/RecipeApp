const express = require("express");
const router = express.Router();
const { jwtTokenValidation } = require('../middlewares/auth.middleware');
router.use("/users", require("./user.routes"));
router.use("/recipes",  jwtTokenValidation, require("./recipe.routes"));

module.exports = router;