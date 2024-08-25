const { DataTypes } = require("sequelize");
const sequelize = require("../../config/data-source"); // Adjust the path if necessary

const Location = sequelize.define(
  "Location",
  {
    countryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    countryCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stateName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stateCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cityName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "locations",
    timestamps: true,
  }
);

module.exports = Location;
