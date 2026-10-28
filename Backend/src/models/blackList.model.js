const mongoose = require("mongoose");

const blackListSchema = new mongoose.Schema(
{
    token : {
        type : String,
        required : [true , "token is required to added in blackList"]
        
    }

},
{
    timestamps : true
}
)

const blackListModel = mongoose.model('blackListTokens',blackListSchema);
module.exports = blackListModel;