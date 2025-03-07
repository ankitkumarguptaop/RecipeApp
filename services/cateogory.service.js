const { cateogoryRepository } = require("../repositories");

exports.listCateogory = async (payload) => {
   return response = await cateogoryRepository.findAll({});
  };
  