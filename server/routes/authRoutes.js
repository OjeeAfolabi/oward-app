const express = require('express');
const router = express.Router();
const User = require('../models/user');
const cors = require('cors');
const mongoose = require('mongoose');
const {test, signUp, loginUser} = require('../controllers/authControllers')

router.use(cors({
    credentials: true,
    origin:'http://localhost:5173'
}))

router.get('/test', test);

router.post('/signup', signUp);
router.post('/login', loginUser);




module.exports=router


