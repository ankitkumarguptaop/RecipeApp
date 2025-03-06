"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Cateogories", [
      {
        name: "North Indian",
      },
      {
        name: "South Indian",
      },
      {
        name: "Italian",
      },
      {
        name: "Veg",
      },
      {
        name: "Non-Veg",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Cateogories", null, {});
  },
};
