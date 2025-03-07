const { INTERNAL_SERVER_ERROR, OK } = require("../libs/constants");
const { recipeService } = require("../services");

exports.createRecipe = async (req, res) => {
  try {
    const response = await recipeService.createRecipe({
      body: req.body,
      user: req.user,
      file: req.file,
    });
    res
      .status(OK)
      .json({ message: "successfuly created recipe", recipe: response });
  } catch (error) {
    console.log("Failed to create recipe", error);
    res
      .status(error.statusCode || INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

exports.listRecipe = async (req, res) => {
  try {
    const response = await recipeService.listRecipe({
      query: req.query,
      params: req.params,
      user: req.user,
    });
    res.status(OK).json({ recipe: response });
  } catch (error) {
    console.log("Failed to list recipe", error.message);
    res
      .status(error.statusCode || INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};
