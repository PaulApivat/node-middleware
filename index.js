// create an express server
const express = require('express');  //inside package.json dependencies
const helmet = require('helmet'); 
const logger = require('morgan');   

// const customMW = require('./custom_middleware')
// console.log('custom MW', customMW);
//const db = require('./data/db')

const supplierRouter = require('./supplier_router.js')
const itemRouter = require('./item_router.js')

const server = express();
const PORT = 5050;

// middleware - extension on express barebones
// 1. built in
// 2. third party library
// 3. custom

// third party middlware
server.use(
    express.json(),
    logger('dev'),
    helmet(),
    //customMW.gatekeeper    // custom middleware - logging in with a password; put in custom_middleware file

);

server.use('/api/suppliers', supplierRouter);
server.use('/api/items', itemRouter);


// Initial test to see if server is working
// server.get('/entrance', (req, res) => {
//     res.status(404).json({message: 'request received, welcome Will Ferret'});
// });

// 2 resources Lecture on Coffee Shop Inventory App



// listen
server.listen(PORT, err => {
    console.log(`server is up and running on ${PORT}`);
})

