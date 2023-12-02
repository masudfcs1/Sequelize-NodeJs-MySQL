const { Sequelize } = require("sequelize");
var colors = require("@colors/colors");

const sequelize = new Sequelize("employedbd", "root", "1234", {
  host: "localhost",
  dialect:
    "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.".bgBrightGreen);
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
