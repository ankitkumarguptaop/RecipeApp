const express = require("express");
const { userController ,recipeController } = require("../controllers");
const { uplaod } = require("../middlewares/image-upload.middlere")
const router = express.Router();

router.post("/", uplaod().single("picture"), recipeController.createRecipe);
router.get("/", recipeController.listRecipe);

module.exports = router;
