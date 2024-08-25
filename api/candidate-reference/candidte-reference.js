const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/data-source"); // Import the sequelize instance

class CandidteReference extends Model {}
CandidteReference.init(
  {
    ref_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ref_designation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ref_contact_num: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ref_email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ref_relationship: {
      type: DataTypes.STRING,
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
    modelName: "CandidteReference", // Choose the model name
    tableName: "candidate_references",
  }
);

module.exports = CandidteReference; // Use module.exports for consistency
