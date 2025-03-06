"use strict";

const { Sequelize, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const { sequelize } = require("../configs/database");

const User = sequelize.define(
  "User",
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
    email: {
      allowNull: false,
      unique:true,
      type: Sequelize.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "invalid email format",
        },
      },
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING,
      validate: {
        len: {
          args: [6, 30],
          msg: "password length should lies between 6 to 30",
        },
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
    modelName: "User",
    tableName: "User"
  }
);

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt
    .hash(user.password, salt)
    .then((hash) => {
      user.password = hash;
    })
    .catch((err) => {
      throw new Error();
    });
});

User.prototype.matchPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = User;
