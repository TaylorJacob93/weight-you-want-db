const express = require('express');
const profileController = require('../controllers/profile');

const router = express.Router();

router.post('/', profileController.create);

router.get("/", profileController.read);

module.exports = router;