const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/data-source"); // Import the sequelize instance

class FathersDocuments extends Model {}
FathersDocuments.init(
  {
    aadharNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    aadharUpload: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    panNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    panUpload: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    drivingLicenseNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    drivingLicenseUpload: {
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
    modelName: "FathersDocuments", // Choose the model name
    tableName: "fathers_documents",
  }
);

module.exports = FathersDocuments; // Use module.exports for consistency
