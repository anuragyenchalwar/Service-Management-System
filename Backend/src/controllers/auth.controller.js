const userModel = require("../models/user.model");
const bcrypt = require('bcrypt');

/**
 * 
 * @name registerUserController 
 * @description registered user expect username , email and password 
 * @access public
 * 
 */



async function registerUserController(req,res) {
    const{username,email,password} = req.body;
    
    if(!username || !email || !password){
        return res.status(400).json({
            message : 'please provide all the details'
        })
    }
    
    const isAlreadyRegistered = await userModel.findOne({
        $or : [{email},{username}]
    })
    
    if(isAlreadyRegistered){
        return res.status(409).json({
            message : 'user is already registered'
        })
    }

    const hash = await bcrypt.hash(password,10)

    const user = await userModel.create({
        email,
        username,
        password : hash
    })

    return res.status(201).json({
        user : {
            userId:user._id,
            username:user.username,
            email:user.email
        },
        
        message : 'user register successffully'
    })
}

module.exports = {registerUserController}