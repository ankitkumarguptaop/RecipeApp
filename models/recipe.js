"use strict";
const { Sequelize } = require("sequelize");
const User = require("./user");
const Cateogories = require("./cateogory");
const { sequelize } = require("../configs/database");
const Attachment = require("./attachment");

const Recipe = sequelize.define(
  "Recipe",
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
      validate: {
        len: {
          args: [1, 30],
          msg: "name length should lies between 1 to 30",
        },
      },
      require: true,
    },
    description: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: "id",
      },
    },
    cateogory_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Cateogories",
        key: "id",
      },
    },
    attachment_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Attachments",
        key: "id",
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  },
  {
    modelName: "Recipe",
    tableName: "Recipes",
  }
);

Recipe.belongsTo(User, {
  as: "user",
  foreignKey: "user_id",
});
User.hasMany(Recipe, {
  foreignKey: "user_id",
  sourceKey: "id",
});

Recipe.belongsTo(Cateogories, {
  as: "cateogory",
  foreignKey: "cateogory_id",
});

Cateogories.hasMany(Recipe, {
  foreignKey: "cateogory_id",
  sourceKey: "id",
});

Recipe.belongsTo(Attachment, {
  as: "attachment",
  foreignKey: "attachment_id",
});

Attachment.hasMany(Recipe, {
  foreignKey: "attachment_id",
  sourceKey: "id",
});

module.exports = Recipe;
