const express=require('express');
const router=express.Router();
const{login,signup}=require('../controller/auth.js');
// router.post('/',login);
// router.post('/signup',signup);
module.exports= router;