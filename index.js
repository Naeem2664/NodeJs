
const express=require('express')
const req = require('express/lib/request')
const server=express()
const productController=require('./controller/product')
const productRouter=require('./routes/product')
//Bodyparser
server.use(express.json())
server.use('/products',productRouter.router)
server.listen(8080,()=>{
    console.log("Server Has been Started")
})
