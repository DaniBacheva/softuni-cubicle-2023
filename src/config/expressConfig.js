const path = require('path');
const express = require('express');
//npm install cookie-parser, jsonwebtoken
const cookieParser = require ('cookie-parser');


function expressConfig (app) {

 //express config
app.use(express.static(path.resolve(__dirname,'../public')));
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

}

module.exports = expressConfig;