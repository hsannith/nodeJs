const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const pagenotfound=require('./controllers/404controller')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use(pagenotfound.error);

app.listen(3000);
