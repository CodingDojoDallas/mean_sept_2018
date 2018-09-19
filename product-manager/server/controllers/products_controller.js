var Product = require('../models/product_model');

module.exports = {

  products: (req, res) => {
    Product.find({}, (err, products) => {
      if (err) {
        res.json({'message': 'error', 'errors': ['Couldnt Product.find()']});
      }
      else {
        res.json(products);
      }
    });
  },

  product: (req, res) =>{
    id = req.params.id;
    Product.findById(id, (err, product) => {
      if (err) {
        res.json({'err': 'Ooooopsies'});
      }
      else {
        res.json(product);
      }
    });
  },

  products_create: (req, res) => {
    t = new Product();

    // req.body contains the products passed in from createProducts in http.service.ts
    t.name = req.body.name;
    t.price = req.body.price;
    t.info = req.body.info;
    t.image_url = req.body.url;

    t.save((err) => {
      res.json({'errors': err, 'product': t});
    });
  }
}
