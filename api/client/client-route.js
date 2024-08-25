const express = require('express');
const router = express.Router();
const ClientController = require('./client-controller'); // Ensure the correct path and export

// Define a route for creating a user
 router.post('/', ClientController.createClient);
router.put('/', ClientController.updateClient); 

router.get('/', ClientController.getClientList);
 router.get('/:ClientId', ClientController.getClinetById);
router.delete('/', ClientController.deleteClient);



// Api Route

router.get('/:id/candidates', ClientController.getCandidtes); 


module.exports = router; // Export the router
