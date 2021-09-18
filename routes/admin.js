const express = require('express');
const router = express.Router();

const adminService = require('../services/adminService');

router.get('/login', function(req, res){
    const adminDetails = req.body;
    adminService.getAdminDetails(adminDetails, function(err, result){
        if(err){
            res.status(500).send(err);
        }
        res.send(result);
    });
});

module.exports = router;