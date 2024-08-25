const express = require('express');
const router = express.Router();
const candidateDocsController = require('./candidate-docs-controller'); // Ensure the correct path and export

// Define a route for creating a user
 router.post('/', candidateDocsController.createCandidateDocs);
router.put('/', candidateDocsController.updateCandidteDocs); 

router.get('/', candidateDocsController.getCandidteListDocs);
 router.get('/:candidateId', candidateDocsController.getDocsByCandidteId);
router.delete('/', candidateDocsController.deleteCandidateDocs); 

module.exports = router; // Export the router
