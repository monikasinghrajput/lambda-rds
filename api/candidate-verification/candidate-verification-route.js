const express = require('express');
const router = express.Router();
const candidateVerificationController = require('./candidate-verification-controller'); // Ensure the correct path and export

// Define a route for creating a user
 router.post('/', candidateVerificationController.createCandidateVerification);
router.put('/', candidateVerificationController.updateCandidteVerification); 

router.get('/', candidateVerificationController.getCandidteListVerification);
 router.get('/:candidateId', candidateVerificationController.getVerificationByCandidteId);
router.delete('/', candidateVerificationController.deleteCandidateVerification); 

module.exports = router; // Export the router
