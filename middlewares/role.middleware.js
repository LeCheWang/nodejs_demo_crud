const ErrorResponse = require("../helpers/ErrorResponse");

module.exports = (roles = []) => {
    if (typeof roles === 'string'){
        roles =  [roles];
    }
    // ['admin']
    return (req, res, next)=>{
        if (!roles.includes(req.account.role)){
            throw new ErrorResponse(403, 'Bạn không có quyền truy cập');
        }
        next();
    }
}