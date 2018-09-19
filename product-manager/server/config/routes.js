var products_controller = require('../controllers/products_controller'),
    path                = require('path');

// routes are first checked here, in Express
module.exports = function(app) {
  app.get('/api/products', products_controller.products);
  app.get('/api/products/:id', products_controller.product);
  app.post('/api/products', products_controller.products_create);

  // if no Express routes match, go back to Angular
  app.all('*', (req, res, next) => {
    res.sendFile(path.resolve('./public/dist/public/index.html'))
  })
}
