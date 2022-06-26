const path = require('path');
const express = require('express');
const root = require('../util/path')
const adminData = require('./admin');
const router = express.Router();

router.use('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {prods: products, docTitle: 'balls yo'});
});

module.exports = router;