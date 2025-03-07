const { INTERNAL_SERVER_ERROR, OK } = require("../libs/constants");
const { cateogoryService } = require("../services");



exports.listCateogory = async (req, res) => {
    try {
      const response = await cateogoryService.listCateogory();
      res.status(OK).json({ cateogories: response });
    } catch (error) {
      console.log("Failed to list cateogories", error.message);
      res
        .status(error.statusCode || INTERNAL_SERVER_ERROR)
        .json({ error: error.message });
    }
  };