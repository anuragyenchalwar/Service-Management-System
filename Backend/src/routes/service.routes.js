const express = require('express');
const authUsermiddleware = require('../middleware/auth.middleware');
const { createServeiceRequestController } = require('../controllers/serviceRequest.controller');


const serviceRouter = express.Router();

serviceRouter.post('/create',authUsermiddleware,createServeiceRequestController);

module.exports = serviceRouter;