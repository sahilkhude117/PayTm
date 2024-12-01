const {JWT_SECRET} = require("./config");
const jwt= require("jsonwebtoken");

const authMiddleware = (req,res,next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith(`Bearer `)){
        return res.status(403).json({});
    }

    const token = authHeader.split(' '[1]);

    try{
        const decoded = jwt.verify(token, JWT_SECRET);

        if(decoded.userId){
            res.userId = decoded.userId;
            next();
        } else{
            return res.status(403).json({
                message: "Wrong userId"
            })
        }
    } catch(err){
        return res.status(403).json({
            message: "auth failed"
        })
    }
};

module.exports = {
    authMiddleware
}