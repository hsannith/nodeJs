const mongodb=require('mongodb');

const MongoClient=mongodb.MongoClient;

 let _db;
const mongoconnect=(cb)=>{
    MongoClient.connect("mongodb+srv://hitesh:sannithi@cluster0-cyjbs.mongodb.net/shop?retryWrites=true")
.then(
    client=>{
        console.log("connected");
        _db=client.db();
        cb();
    }
)
.catch( err=> {
    console.log(err);
    throw err;
    })
}


const getdb=()=>{
    if(_db){
        return _db;
    }
    throw 'No database found';
}


exports.mongoconnect=mongoconnect;
exports.getdb=getdb;

