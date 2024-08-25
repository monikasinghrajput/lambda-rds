const express = require("express");
const router = express.Router();
const locationController = require("./locationController");

// Route to get countries
router.get("/countries", locationController.getCountries);

// Route to get states
router.get("/states", locationController.getStates);

// Route to get cities
router.get("/cities", locationController.getCities);

module.exports = router;
