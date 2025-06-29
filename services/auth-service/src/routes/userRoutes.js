const express = require('express');
const router = express.Router();
const {register, login,adminlogin} = require('../controllers/userController');

router.post('/register', register);
router.post('/login', login);
router.post('/adminlogin', adminlogin);
module.exports = router;
