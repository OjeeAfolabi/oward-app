const express = require('express');
const router = express.Router();
const User = require('../models/user');
const cors = require('cors');
const mongoose = require('mongoose');
const {signUp, loginUser, logoutUser, getAllProducts, getSingleProduct, searchProducts, AddToCart} = require('../controllers/authControllers');
const {requireAuth} = require('../middleware/requireAuth');
const {getUser} = require('../controllers/userController');

router.route('/signup').post(signUp);
router.route('/login').post (loginUser);
router.route('/logout').get(logoutUser);


router.route('/user').get(requireAuth, getUser);
router.route('/products').post(getAllProducts);
router.route('/singleproduct').post(getSingleProduct);
router.route('/search').post(searchProducts);
router.route('/cart').patch(AddToCart);




module.exports=router


