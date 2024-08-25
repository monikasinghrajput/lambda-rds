const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/data-source"); // Import the sequelize instance

class Team extends Model {}
Team.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    client_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    candidate_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    email_id: {
      type: DataTypes.STRING,
      allowNull: false, // Email should be required
    },
    mobile_number: {
      type: DataTypes.STRING,
      allowNull: false, // Mobile number should be required
    },
    user_role: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    process_list: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    updatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize, // Pass the sequelize instance here
    modelName: "Team", // Choose the model name
    tableName: "teams", // Choose the table name
    timestamps: true, // Enable timestamps
  }
);

module.exports = Team;
