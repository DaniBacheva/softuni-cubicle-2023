const path = require('path');
const express = require('express');
//npm install cookie-parser, jsonwebtoken
const cookieParser = require ('cookie-parser');

const { auth } = require('../middleware/authMiddleware')

function expressConfig (app) {

 //express config
app.use(express.static(path.resolve(__dirname,'../public')));
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(auth);

}

module.exports = expressConfig;