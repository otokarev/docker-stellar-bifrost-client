var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Bifrost Demo',
        allowHorizonHttp: process.env.ALLOW_HORIZON_HTTP,
        env: process.env.NODE_ENV,
        horizonUrl: process.env.HORIZON_URL,
        bifrostUrl: process.env.BIFROST_URL,
        issuingAccount: process.env.ISSUING_ACCOUNT,
    });
});

module.exports = router;
