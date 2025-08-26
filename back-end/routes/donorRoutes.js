const express = require('express');
const router = express.Router();
const donorController = require('../controllers/donorController');

router.post('/register', donorController.registerDonor);
router.post('/login', donorController.login);
router.get('/', donorController.getDonors);
router.post('/', donorController.addDonor);
router.put('/:id', donorController.updateDonor);
router.delete('/:id', donorController.deleteDonor);

module.exports = router;