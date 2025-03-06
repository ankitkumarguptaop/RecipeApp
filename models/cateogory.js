"use strict";
const {  Sequelize } = require("sequelize");

const { sequelize } = require("../configs/database");

const Cateogories = sequelize.define(
  "Cateogories",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING,
      require: true,
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
    },
  },
  {
    modelName: "Cateogories",
    tableName: "Cateogories",
  }
);



module.exports = Cateogories;
