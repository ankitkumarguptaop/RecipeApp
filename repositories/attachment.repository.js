const Attachment = require("../models/attachment");
const BaseRepository = require("./base.repository");

class AttachmentRepository extends BaseRepository {
  constructor({ model }) {
    super({ model });
  }
}

module.exports = new AttachmentRepository({ model: Attachment });
