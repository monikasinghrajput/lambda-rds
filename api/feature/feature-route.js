const express = require('express');
const router = express.Router();
const FeatureController = require('./feature-controller'); // Ensure the correct path and export

// Define a route for creating a user
 router.post('/', FeatureController.createFeature);
router.put('/', FeatureController.updateFeature); 

router.get('/', FeatureController.getFeatureList);
 router.get('/:featureId', FeatureController.getFeatureById);
router.delete('/', FeatureController.deleteFeature); 

module.exports = router; // Export the router
