const app = require('./src/app')

const connectToDB = require('./src/config/database');
connectToDB();

require('dotenv').config();







app.listen(3000,()=>{
    console.log('server is running on port 3000');
})
