const express = require("express");
const getProducts = require("./getproducts");
const getProduct = require("./getproduct");
const app = express();
const port = 9001;



app.get('/api/products', getProducts);
app.get('/api/products/:id', getProduct);


app.listen(port, (()=>{
  console.log("Recieving Request");
}));

