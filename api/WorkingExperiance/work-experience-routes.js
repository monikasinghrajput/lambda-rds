const express = require("express");
const router = express.Router();
const workExperienceController = require("./work-experience-controller"); // Ensure the correct path and export

// Define a route for creating a work experience
router.post("/", workExperienceController.createWorkExperience);
router.put("/", workExperienceController.updateWorkExperience);

router.get("/", workExperienceController.getWorkExperienceList);
router.get(
  "/:candidateId",
  workExperienceController.getWorkExperienceByCandidateId
);
router.delete("/", workExperienceController.deleteWorkExperience);

module.exports = router; // Export the router
