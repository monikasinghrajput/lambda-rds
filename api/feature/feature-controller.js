const Feature = require("./feature"); // Ensure the correct path
const REST_API = require("../../util/api-util");

// Define the createClient controller function
const createFeature = async (req, res) => {
  const response = await REST_API._add(req, res, Feature);
  res.status(200).json(response);
};

const getFeatureList = async (req, res) => {
  const response = await REST_API._getAll(req, res, Feature);
  res.status(200).json(response);
};

const getFeatureById = async (req, res) => {
  const { featureId } = req.params;
  const response = await REST_API._getDataListById(
    req,
    res,
    Feature,
    "id",
    featureId
  );
  res.status(201).json(response);
};
const updateFeature = async (req, res) => {
  const response = await REST_API._update(req, res, Feature);
  res.status(201).json(response);
};

const deleteFeature = async (req, res) => {
  const response = await REST_API._delete(req, res, Feature);
  res.status(201).json(response);
};

exports.createFeature = createFeature;
exports.getFeatureList = getFeatureList;
exports.getFeatureById = getFeatureById;
exports.updateFeature = updateFeature;
exports.deleteFeature = deleteFeature;
