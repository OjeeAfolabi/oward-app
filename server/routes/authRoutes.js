const express = require('express');
const router = express.Router();
const User = require('../models/user');
const cors = require('cors');
const mongoose = require('mongoose');

// router.use(cors({
//     credentials: true,
//     origin:'http://localhost:5173'
// }))

// router.get('/')
router.post('/signup', async (req,res)=>{
    const {email, password} = req.body;

    try{
        const user = await User.create({email, password});
        res.status(201).json(user);
    }
    catch (err){
        console.log(err);
        res.status(400).json({
            status:'fail',
            message:err.message
        })
    }
});
router.post('/login', async (req, res)=>{
    res.status(200).json({
        status:'Success',
        data:"logout working!!"
    })
});

router.get('/logout', (req, res)=>{
    res.status(200).json({
        status:'Success',
        data:"logout working!!"
    })
});



module.exports=router
