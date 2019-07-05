const products = require('../products.json');

const getProducts = (req, res) => {
  if(req.query.price){
  greaterThanQ = products.filter(product => product.price >= req.query.price ? true: false);
    return res.status(200).send(greaterThanQ);
   }
  res.status(200).send(products);
}

module.exports = getProducts;