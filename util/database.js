const Sequelize=require('sequelize');

const sequelize=new Sequelize('node-application','root','sannithi',
{dialect:'mysql',host:'localhost'});

module.exports=sequelize;