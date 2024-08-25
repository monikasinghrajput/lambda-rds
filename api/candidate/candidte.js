const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/data-source"); // Import the sequelize instance
const CandidteAddress = require("../candidate-address/candidate-address");
const CandidateCIBL = require("../candidate-cibil/candidte-cibil");
const CandidteDocs = require("../candidate-docs/candidte-docs");
const CandidteEduction = require("../candidate-eduction/candidte-eduction");
const CandidteReference = require("../candidate-reference/candidte-reference");
const CandidteVerification = require("../candidate-verification/candidte-verification");
const FathersDocuments = require("../fatherdoc/fathers-documents");
const WorkingExperiance = require("../WorkingExperiance/work-experience");

const User = require("../user/user");

class Candidte extends Model {}
Candidte.init(
  {
    notify_candidate: {
      type: DataTypes.ENUM("Yes", "No"),
      allowNull: false,
    },
    notify_client: {
      type: DataTypes.ENUM("Yes", "No"),
      allowNull: false,
    },
    notify_admin: {
      type: DataTypes.ENUM("Yes", "No"),
      allowNull: false,
    },
    form_filled_by: {
      type: DataTypes.ENUM("Candidate", "Data Internal Team"),
      allowNull: false,
    },
    client_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    process: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM("Male", "Female", "Other"),
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    father_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mobile_no: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    applicant_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    client_location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    client_process: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    candidate_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_id: {
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
    modelName: "Candidte", // Choose the model name
    tableName: "candidate",
  }
);

// Candidte.hasMany(CandidteAddress, { foreignKey: "candidate_id" });
// Candidte.hasMany(CandidateCIBL, { foreignKey: "candidate_id" });
// Candidte.hasMany(CandidteDocs, { foreignKey: "candidate_id" });
// Candidte.hasMany(CandidteEduction, { foreignKey: "candidate_id" });
// Candidte.hasMany(CandidteReference, { foreignKey: "candidate_id" });
// Candidte.hasMany(CandidteVerification, { foreignKey: "candidate_id" });
// Candidte.hasMany(FathersDocuments, { foreignKey: "candidate_id" });
// Candidte.hasMany(WorkingExperiance, { foreignKey: "candidate_id" });

Candidte.hasMany(CandidteAddress, {
  foreignKey: "candidate_id",
  onDelete: "CASCADE",
});
Candidte.hasMany(CandidateCIBL, {
  foreignKey: "candidate_id",
  onDelete: "CASCADE",
});
Candidte.hasMany(CandidteDocs, {
  foreignKey: "candidate_id",
  onDelete: "CASCADE",
});
Candidte.hasMany(CandidteEduction, {
  foreignKey: "candidate_id",
  onDelete: "CASCADE",
});
Candidte.hasMany(CandidteReference, {
  foreignKey: "candidate_id",
  onDelete: "CASCADE",
});
Candidte.hasMany(CandidteVerification, {
  foreignKey: "candidate_id",
  onDelete: "CASCADE",
});
Candidte.hasMany(FathersDocuments, {
  foreignKey: "candidate_id",
  onDelete: "CASCADE",
});
Candidte.hasMany(WorkingExperiance, {
  foreignKey: "candidate_id",
  onDelete: "CASCADE",
});

Candidte.hasMany(User, {
  foreignKey: "candidate_id",
  onDelete: "CASCADE",
});

module.exports = Candidte; // Use module.exports for consistency
