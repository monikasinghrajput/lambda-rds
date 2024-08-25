const express = require("express");
const router = express.Router();
const fathersDocumentsController = require("./fathers-documents-controller"); // Ensure the correct path and export

// Define routes
router.post("/", fathersDocumentsController.createFathersDocuments);
router.put("/", fathersDocumentsController.updateFathersDocuments);
router.get("/", fathersDocumentsController.getFathersDocumentsList);
router.get(
  "/:candidateId",
  fathersDocumentsController.getFathersDocumentsByCandidateId
);
router.delete("/", fathersDocumentsController.deleteFathersDocuments);

module.exports = router; // Export the router
