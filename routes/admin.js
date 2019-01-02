const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const adminController=require('../controllers/admin');

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

//  /admin/products
router.get('/products',adminController.getProducts)
exports.routes = router;
