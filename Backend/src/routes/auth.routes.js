const express = require('express');
const { registerUserController ,loginUserController,getCUrrentUserController, logoutUserController } = require('../controllers/auth.controller');
const authRouter = express.Router();

const authUsermiddleware = require('../middleware/auth.middleware');

authRouter.post('/register' ,registerUserController );
authRouter.post("/login", loginUserController);
authRouter.get('/me',authUsermiddleware,getCUrrentUserController);

authRouter.post("/logout",logoutUserController);

module.exports = authRouter;