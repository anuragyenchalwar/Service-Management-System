const mongoose = require('mongoose')


async function connectToDB() {
    try {
        await mongoose.connect('mongodb+srv://user:pass%40123@service-management.hbbotyp.mongodb.net/?appName=service-management')
        console.log('Connect to database succesfully!');
        
    } catch (error) {
        console.log(error);
    }    
}

module.exports = connectToDB;