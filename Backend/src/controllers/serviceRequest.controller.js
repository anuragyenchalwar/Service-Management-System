const { json } = require('express');
const serviceRequestModel = require('../models/serviceRequestModel');


/**
 * @name serviceRequestModel
 * @title 
 * @description 
 * @category
 * @createdBy
 */


async function createServeiceRequestController(req,res){
    const{title,description,category} = req.body;
    if(!title || !description || !category){
        return res.status(400).json({
            message : "please provide all the fields"
        })
    }

    const service = await serviceRequestModel.create({
        title,
        description,
        category,
        createdBy : req.user.id    })

    return res.status(201).json({
        message : "serivce request seccessfully created"
    })
}  

module.exports = {createServeiceRequestController}