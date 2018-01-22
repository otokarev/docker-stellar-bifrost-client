var express = require('express');
var router = express.Router();
require('dotenv').load();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Bifrost Demo',

        network: 'production' === process.env.NODE_ENV ? 'live' : 'test',
        horizonURL: process.env.HORIZON_URL,
        bifrostURL: process.env.BIFROST_URL,
        assetCode: process.env.ASSET_CODE,
        price: process.env.ASSET_PRICE,
        issuingPublicKey: process.env.ISSUING_ACCOUNT,
        preSaleMode: process.env.PRESALE,
    });
});

module.exports = router;
