const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/data-source"); // Import the sequelize instance

class CandidteAddress extends Model {}
CandidteAddress.init(
  {
    address_type: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    full_address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    city_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    district_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    postal_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    country_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    stay_from_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    stay_till_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    house_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address_proof_file: {
      type: DataTypes.STRING, // Store the file path as a string
      allowNull: true,
    },
    address_proof: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    court_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    police_verified: {
      type: DataTypes.BOOLEAN,
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
    modelName: "CandidteAddress", // Choose the model name
    tableName: "candidate_address",
  }
);

module.exports = CandidteAddress; // Use module.exports for consistency
