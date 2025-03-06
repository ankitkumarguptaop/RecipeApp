const Cateogories = require("../models/cateogory");
const BaseRepository = require("./base.repository");

class CateogoryRepository extends BaseRepository {
  constructor({ model }) {
    super({ model });
  }
}

module.exports = new CateogoryRepository({ model: Cateogories });
