const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
 
  Product.create({
    title:title,
    price:price,
    imageUrl:imageUrl,
    description:description
  }).then(
   result=>{
  //console.log(result);
   res.redirect('/admin/products');
   }
  )
  .catch(
    err=>console.log(err)
  )
  
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
  .then(
    product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product
      });
    })
    .catch(
      err=>console.log(err)
    )

  
};


exports.postdeleteproduct=(req,res,next)=>{

  const prodid=req.body.productid;
  Product.findById(prodid)
  .then(
    product=>
    {
      return product.destroy()
    }
  )
  .then(
     result=>{
     // console.log("product deleted");
      res.redirect('/admin/products')
     }
   
  ) .catch(
    err=>console.log(err)
  )
 

}
exports.posteditproduct=(req,res,next)=>{
  const prodId=req.body.productId;
  const updttitle=req.body.title;
  const updtprice=req.body.price;
  const updtimageurl=req.body.imageUrl;
  const updtdescription=req.body.description;

 Product.findById(prodId)
 .then(
   product=>{
     product.title=updttitle;
     product.price=updtprice;
     product.imageUrl=updtimageurl;
     product.description=updtdescription;

     return product.save();
   }
 )
 .then(
   result=>{
     //console.log("UPDATED PRODUCT");
     res.redirect('/admin/products');
   },
  
 )
 .catch(
   err=>console.log(err)
 )

  
}



exports.getProducts = (req, res, next) => {

  Product.findAll()
  .then(
    products=>{
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    }
   
  )
  .catch(
    err=>console.log(err)
  )

  
};
