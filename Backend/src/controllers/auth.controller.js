const userModel = require("../models/user.model");

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

    
}