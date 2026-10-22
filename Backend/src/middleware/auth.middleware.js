const jwt = require("jsonwebtoken");

//middleware intigration
function authMiddleware (req, res, next){
    const token = req.cookies.token; //accessing the token from cookies
    
    if(!token){
        return res.status(401).json({
            message : "Authentication required!"
        })
    }
    
    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SERCRETE_KEY
        );                                     //verify the token

        req.user = decoded;


    } catch (error) {
        return res.status(401).json({
            "message" : "invalid or expired token"
        });    
    }
    next();
}

module.exports = authMiddleware;