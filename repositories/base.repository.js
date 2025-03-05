class BaseRepository {
  constructor({ model }) {
    this.model = model;
  }

  async create(payload, options = {}) {
    const instance = await this.model.create(payload, options);
    return instance && instance.toJSON();
  }

  async update({ payload, criteria, options }) {
    return await this.model.update(payload, { where: criteria, ...options });
  }

  async findAll({
    criteria = {},
    include = [],
    order,
    attributes = {},
    offset = 0,
    paranoid = true,
    limit = null,
  }) {
    let findQuery = {
      where: criteria,
      include,
      attributes,
      offset,
      order,
      paranoid,
      subQuery: false,
    };
    if (limit) findQuery.limit = limit;
    return await this.model.findAll(findQuery);
  }

  async softDelete(criteria, options = null) {
    const response = await this.model.destroy({ where: criteria }, options);
    return response;
  }
}
