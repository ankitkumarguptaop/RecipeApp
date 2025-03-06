"use strict";
const {  Sequelize } = require("sequelize");

const { sequelize } = require("../configs/database");

const  Attachment= sequelize.define(
  "Attachments",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    file_name: {
      allowNull: false,
      type: Sequelize.STRING
    },
    file_link: {
      allowNull: false,
      type: Sequelize.STRING
    },
    size: {
      allowNull: false,
      type: Sequelize.STRING
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
    },
  },
  {
    modelName: "Attachments",
    tableName: "Attachments",
  }
);



module.exports = Attachment;
