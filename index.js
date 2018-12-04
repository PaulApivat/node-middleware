// create an express server
const express = require('express');  //inside package.json dependencies
const helmet = require('helmet'); 
const logger = require('morgan');   

const customMW = require('./custom_middleware')
console.log('custom MW', customMW);
//const db = require('./data/db')

const server = express();
const PORT = 5050;

// middleware - extension on express barebones
// 1. built in
// 2. third party library
// 3. custom

//server.use(express.json());  //most common use built in
//server.use(helmet());        //third party library
//server.use(logger('dev'));  //third party library

// third party middlware
server.use(
    express.json(),
    logger('dev'),
    helmet(),
    customMW.gatekeeper
);

// custom middleware - logging in with a password; put in custom_middleware file

// server.use((req, res, next) => {
//     const pass = req.query.pass;
//     if (pass === 'ferret') {
//         next();
//     } else {
//         res.status(400).json({message: 'invalid password'});
//     }
// });

// route handlers - GET endpoint

server.get('/entrance', (req, res) => {
    res.status(404).json({message: 'request received, welcome ferret'});
});

// listen
server.listen(PORT, err => {
    console.log(`server is up and running on ${PORT}`);
})

