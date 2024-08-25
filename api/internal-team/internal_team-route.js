const express = require('express');
const router = express.Router();
const InternalTeamController = require('./internal_team-controller'); // Ensure the correct path and export

// Define a route for creating a user
 router.post('/', InternalTeamController.createInternalTeam);
router.put('/', InternalTeamController.updateInternalTeam); 

router.get('/', InternalTeamController.getInternalTeamList);
 router.get('/:internalTeamId', InternalTeamController.getInternalTeamById);
router.delete('/', InternalTeamController.deleteInternalTeam); 

module.exports = router; // Export the router
