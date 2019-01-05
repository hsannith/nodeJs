const getDB=require('../util/database').getdb;

class Product{
  constructor(title,price,description,imageUrl){
    this.title=title;
    this.price=price;
    this.imageUrl=imageUrl;
    this.description=description;
  }

  save(){
    const db=getDB();

    return db.collection('products').insertOne(this)
    .then(
      result=>{
        console.log(result);
      }
    )
    .catch(
      err=> console.log(err)
    )
  }


  static fetchall(){
    const db=getDB();

    return db.collection('products').find().toArray()
    .then(
      products=>{
        console.log(products);
        return products;
      }
    )
    .catch(
      err=> console.log(err)
    )
  }

}



module.exports=Product;





