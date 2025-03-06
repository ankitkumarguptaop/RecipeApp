const { BadRequest, NoContent } = require("../libs/errors");
const { recipeRepository, attachmentRepository } = require("../repositories");

exports.createRecipe = async (payload) => {
  const { name, description, cateogory_id } = payload.body;
  const user = payload.user;
  const { filename, path, size } = payload.file;

  if (!name || !description || !cateogory_id || !filename || !path || !size) {
    throw new BadRequest("data is not given");
  }

  const recipeImage = await attachmentRepository.create({
    file_link: path,
    file_name: filename,
    size: size,
  });

  if (!recipeImage) {
    throw new NoContent("recipe image not created");
  }

  const response = await recipeRepository.create({
    name: name,
    description: description,
    user_id: user.id,
    cateogory_id: cateogory_id,
    attachment_id: recipeImage.id,
  });

  return response;
};

exports.listRecipe = async (payload) => {
  const user = payload.user;

  const response = await recipeRepository.listUser({
    query: payload.query,
    user_id: user.id,
    include:['attachment' ,'user','cateogory']
  });

  return response;
};
