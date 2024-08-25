const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/data-source");

class InternalTeam extends Model {}

InternalTeam.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mobile_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
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
    user_role: {
      type: DataTypes.ENUM(
        "GenInfo",
        "EducationInfo",
        "AddressInfo",
        "CibilInfo",
        "ReferenceInfo",
        "ExperienceInfo"
      ),
      allowNull: false,
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
    sequelize,
    modelName: "InternalTeam",
    tableName: "internal_team",
  }
);

module.exports = InternalTeam;
