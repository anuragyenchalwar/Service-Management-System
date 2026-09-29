const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
    {
        username : {
            type : String,
            min : 3,
            trim : true,
            required : true,
            unique : [true,'email already exist']
        },
        
        email :{
            type :String,
            lowercase : true,
            unique : [true,'email already exist'],
            required : true

        },

        password : {
            type : String,
            required : true,
            min : 6

        }
    }
)

const userModel = new mongoose.model('users',userSchema)

module.exports = userModel;


