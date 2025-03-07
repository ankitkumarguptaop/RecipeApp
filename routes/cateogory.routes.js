const express = require("express");
const { cateogoryController } = require("../controllers");
const router = express.Router();

router.get("/", cateogoryController.listCateogory);

module.exports = router;
