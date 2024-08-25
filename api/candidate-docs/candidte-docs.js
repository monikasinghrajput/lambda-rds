const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/data-source"); // Import the sequelize instance

class CandidteDocs extends Model {}
CandidteDocs.init(
  {
    doc_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    doc_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    doc_file: {
      type: DataTypes.BLOB,
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
    modelName: "CandidteDocs", // Choose the model name
    tableName: "candidate_docs",
  }
);

module.exports = CandidteDocs; // Use module.exports for consistency
