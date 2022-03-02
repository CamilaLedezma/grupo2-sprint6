const fs=require('fs');
const path = require('path');
let db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const imageController= require('../controllers/imageController')

const Product= db.Product;
const mainController= {
    index: async(req, res) =>{
        try{
            let products=await Product.findAll({
                include:["discounts","images"],
                where: {recommended:1}
            })
                
                return res.render('products/index',{products})
            
            
            
        }
        catch(error){
            console.log(error)
        }
    },
    show:async(req,res)=>{
        try{
            let products=await Product.findAll({
                include:["discounts","images"],
            })
                
                return res.render('products/productsAdmin',{products})
            
            
            
        }
        catch(error){
            console.log(error)
        }
    }
}
module.exports = mainController;