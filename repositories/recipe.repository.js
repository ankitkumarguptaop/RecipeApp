const { Sequelize } = require("../models");
const Recipe = require("../models/recipe");

const BaseRepository = require("./base.repository");

class RecipeRepository extends BaseRepository {
  constructor({ model }) {
    super({ model });
  }
  
  async listUser({ user_id, query ,include }) {
    const { limit = 10, page = 1, search  ,cateogory_id} = query;
    let offset = 0;
    if (page && limit) {
      offset = limit * (page - 1);
    }
 
    let whereObj = {}; 

    if(cateogory_id){
      whereObj["cateogory_id"] =cateogory_id
    }

    whereObj["user_id"] = user_id;
    if (search) {
      whereObj[Sequelize.Op.or] = [
        { name: { [Sequelize.Op.iLike]: `%${search}%` } },
      ];
    }

    return await this.findAndCountAll({ criteria: whereObj, offset, limit ,include });
  }
}

module.exports = new RecipeRepository({ model: Recipe });
