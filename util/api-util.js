const logger = require("../config/logger");

const _getAll = async (req, res, modalName) => {
  try {
    const response = await modalName.findAll();
    return response;
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: error.message });
  }
};

const _getDataListById = async (req, res, modalName, fieldName, fieldValue) => {
  try {
    const response = await modalName.findAll({
      where: { [fieldName]: fieldValue },
    });
    return response;
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: error.message });
  }
};

const _update = async (req, res, modalName) => {
  try {
    const response = await modalName.update(req.body, {
      where: {
        id: req.body.id,
      },
    });
    return response;
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: error.message });
  }
};

const _delete = async (req, res, modalName) => {
  try {
    const response = await modalName.destroy({
      where: {
        id: req.body.id,
      },
    });
    return response;
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: error.message });
  }
};

const _add = async (req, res, modalName) => {
  try {
    const response = await modalName.create(req.body);
    console.log(response);
    return response;
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: error.message });
  }
};
exports._getAll = _getAll;
exports._getDataListById = _getDataListById;
exports._update = _update;
exports._delete = _delete;
exports._add = _add;
