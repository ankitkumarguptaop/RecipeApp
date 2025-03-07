const express = require("express");
const {recipeController } = require("../controllers");
const { imageUpload } = require("../middlewares")
const router = express.Router();

router.post("/", imageUpload.uplaod().single("image"), recipeController.createRecipe);
router.get("/", recipeController.listRecipe);

module.exports = router;
