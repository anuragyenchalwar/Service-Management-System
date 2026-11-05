const express = require('express');
const authRouter = require('./routes/auth.routes');
const cookieParser = require('cookie-parser');
const serviceRouter = require('./routes/service.routes');








const app = express();


app.use(express.json());//middleware
app.use(cookieParser());//middlware


app.use('/api/auth', authRouter)
app.use('/api/service',serviceRouter)


module.exports = app;