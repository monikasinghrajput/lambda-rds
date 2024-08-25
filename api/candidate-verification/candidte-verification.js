const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/data-source"); // Import the sequelize instance

class CandidteVerification extends Model {}
CandidteVerification.init(
  {
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    reasion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    candidate_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    updatedAt: {
      type: DataTypes.TIME,
      allowNull: true,
    },
  },
  {
    sequelize, // Pass the sequelize instance here
    modelName: "CandidteVerification", // Choose the model name
    tableName: "candidate_verification",
  }
);

module.exports = CandidteVerification; // Use module.exports for consistency
