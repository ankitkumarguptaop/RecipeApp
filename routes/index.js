const express = require("express");
const router = express.Router();
const {authMiddleware  } = require('../middlewares');

router.use("/users", require("./user.routes"));
router.use("/recipes",  authMiddleware.jwtTokenValidation, require("./recipe.routes"));

module.exports = router;