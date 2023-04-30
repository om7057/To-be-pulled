const express = require('express');
const router = express.Router();


const { deleteUser, login, signUp } = require('../controllers/userControllers');

router.post('/login', login);
router.post('/signup', signUp);
router.delete('/deleteUser', deleteUser);

module.exports = router;