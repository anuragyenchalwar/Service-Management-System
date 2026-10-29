const mongoose = require("mongoose");


const serviceRequestSchema = new mongoose.Schema(
   {
        title: String,
        description: String,
        category: String,
        status: String,
        createdBy : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "users"
        }
    },
        {
            timestamps : true
        }
)

const serviceRequestModel = mongoose.model('ServiceRequest',serviceRequestSchema);
module.exports = serviceRequestModel;