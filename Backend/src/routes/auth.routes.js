const express = require('express');
const { registerUserController ,loginUserController,getCUrrentUserController } = require('../controllers/auth.controller');
const authRouter = express.Router();

const middleware = require('../middleware/auth.middleware');

authRouter.post('/register' ,registerUserController );
authRouter.post("/login", loginUserController);
authRouter.get('/me',middleware,getCUrrentUserController);


module.exports = authRouter;