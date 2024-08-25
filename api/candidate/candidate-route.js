const express = require('express');
const router = express.Router();
const candidateController = require('./candidate-controller'); // Ensure the correct path and export

// Define a route for creating a candidate
router.post('/', candidateController.createCandidate);

// Define a route for updating a candidate
router.put('/', candidateController.updateCandidte);

// Define a route for getting all candidates
router.get('/', candidateController.getCandidteList);

// Define a route for getting a candidate by ID
router.get('/:candidateId', candidateController.getCandidteById);

// Define a route for deleting a candidate
router.delete('/', candidateController.deleteCandidate);

module.exports = router; // Export the router
