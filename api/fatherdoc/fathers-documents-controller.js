const FathersDocuments = require("./fathers-documents"); // Ensure the correct path
const REST_API = require("../../util/api-util");

// Define the createFathersDocuments controller function
const createFathersDocuments = async (req, res) => {
  const response = await REST_API._add(req, res, FathersDocuments);
  res.status(200).json(response);
};

const getFathersDocumentsList = async (req, res) => {
  const response = await REST_API._getAll(req, res, FathersDocuments);
  res.status(200).json(response);
};

const getFathersDocumentsByCandidateId = async (req, res) => {
  const { candidateId } = req.params;
  const response = await REST_API._getDataListById(
    req,
    res,
    FathersDocuments,
    "candidate_id",
    candidateId
  );
  res.status(200).json(response);
};

const updateFathersDocuments = async (req, res) => {
  const response = await REST_API._update(req, res, FathersDocuments);
  res.status(200).json(response);
};

const deleteFathersDocuments = async (req, res) => {
  const response = await REST_API._delete(req, res, FathersDocuments);
  res.status(200).json(response);
};

exports.createFathersDocuments = createFathersDocuments;
exports.getFathersDocumentsList = getFathersDocumentsList;
exports.getFathersDocumentsByCandidateId = getFathersDocumentsByCandidateId;
exports.updateFathersDocuments = updateFathersDocuments;
exports.deleteFathersDocuments = deleteFathersDocuments;
