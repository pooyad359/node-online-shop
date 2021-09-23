const Sequelize = require("sequelize");

const sequelize = new Sequelize("shop-schema", "node-user", "Node_Access", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
