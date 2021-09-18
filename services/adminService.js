const baseDao = require('../daos/baseDao');

module.exports.getAdminDetails = function(adminDetails, callback){
    let query = {"userName": adminDetails.name, "password": adminDetails.password};
    baseDao.getByQuery(query, "admin", function(err, res){
        if(err){
            callback(err, null);
            return;
        }
        res.status = true;
        callback(null, res);
        return;
    });
};