const CandidteDocs = require("./candidte-docs"); // Ensure the correct path
const REST_API = require("../../util/api-util");

// Define the createCandidate controller function
const createCandidateDocs = async (req, res) => {
  const response = await REST_API._add(req, res, CandidteDocs);
  res.status(200).json(response);
};

const getCandidteListDocs = async (req, res) => {
  const response = await REST_API._getAll(req, res, CandidteDocs);
  res.status(200).json(response);
};

const getDocsByCandidteId = async (req, res) => {
  const { candidateId } = req.params;
  const response = await REST_API._getDataListById(
    req,
    res,
    CandidteDocs,
    "candidate_id",
    candidateId
  );
  res.status(201).json(response);
};
const updateCandidteDocs = async (req, res) => {
  const response = await REST_API._update(req, res, CandidteDocs);
  res.status(201).json(response);
};

const deleteCandidateDocs = async (req, res) => {
  const response = await REST_API._delete(req, res, CandidteDocs);
  res.status(201).json(response);
};

exports.createCandidateDocs = createCandidateDocs;
exports.getCandidteListDocs = getCandidteListDocs;
exports.getDocsByCandidteId = getDocsByCandidteId;
exports.updateCandidteDocs = updateCandidteDocs;
exports.deleteCandidateDocs = deleteCandidateDocs;
