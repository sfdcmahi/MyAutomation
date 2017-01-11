var express = require('express');
var router = express.Router();

router.get('/api', function(req, res, next){
    res.send('This call is for API');
});

module.exports = router;
