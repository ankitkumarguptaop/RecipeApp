"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
