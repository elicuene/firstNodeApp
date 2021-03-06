const express = require('express');
const path = require('path');

const root = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    res.render('add-product', {docTitle: 'addin balls'});
});

router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/shop');
});

exports.routes = router;
exports.products = products;