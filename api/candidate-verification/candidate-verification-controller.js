const CandidteVerification = require("./candidte-verification"); // Ensure the correct path
const REST_API = require("../../util/api-util");

// Define the createCandidate controller function
const createCandidateVerification = async (req, res) => {
  const response = await REST_API._add(req, res, CandidteVerification);
  res.status(200).json(response);
};

const getCandidteListVerification = async (req, res) => {
  const response = await REST_API._getAll(req, res, CandidteVerification);
  res.status(200).json(response);
};

const getVerificationByCandidteId = async (req, res) => {
  const { candidateId } = req.params;
  const response = await REST_API._getDataListById(
    req,
    res,
    CandidteVerification,
    "candidate_id",
    candidateId
  );
  res.status(201).json(response);
};
const updateCandidteVerification = async (req, res) => {
  const response = await REST_API._update(req, res, CandidteVerification);
  res.status(201).json(response);
};

const deleteCandidateVerification = async (req, res) => {
  const response = await REST_API._delete(req, res, CandidteVerification);
  res.status(201).json(response);
};

exports.createCandidateVerification = createCandidateVerification;
exports.getCandidteListVerification = getCandidteListVerification;
exports.getVerificationByCandidteId = getVerificationByCandidteId;
exports.updateCandidteVerification = updateCandidteVerification;
exports.deleteCandidateVerification = deleteCandidateVerification;
