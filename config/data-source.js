const { Sequelize } = require("sequelize");
require("dotenv").config(); // Load environment variables from .env file

const sequelize = new Sequelize(
  process.env.RDS_DB_NAME || 'bgv',
  process.env.RDS_USERNAME,
  process.env.RDS_PASSWORD,
  {
    host: process.env.RDS_HOSTNAME,
    post: process.env.RDS_PORT,
    dialect: "mysql",
    dialectModule: require("mysql2"), // Explicitly use mysql2 for Sequelize
  }
);

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
