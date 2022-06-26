const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const { dirname } = require('path');

const app = express();

app.set('view engine', 'pug');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use('/shop', shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('not-found');
});

app.listen(3000);