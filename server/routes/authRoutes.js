const express = require('express');
const router = express.Router();
const User = require('../models/user');
const cors = require('cors');
const mongoose = require('mongoose');
const {signUp, loginUser, logoutUser} = require('../controllers/authControllers');
const {requireAuth} = require('../middleware/requireAuth');
const {getUser} = require('../controllers/userController');

router.use(cors({
    credentials: true,
    origin:'http://localhost:5173'
}))


router.route('/signup').post(signUp);
router.route('/login').post (loginUser);
router.route('/logout').get(logoutUser);


router.route('/user').get(requireAuth, getUser);




module.exports=router


