const Cake = require('../models/cakes.js');

module.exports = {
  all: function(req, res) {
    Cake.find({}).sort("-createdAt").exec(function(err, cakes) {
      if (err) {
        console.log(err);
        return res.json({ error: err });
      }
      return res.json({ cakes: cakes });
    });
  },
  create: function(req, res) {
    var cake = new Cake({
      baker_name: req.body.baker_name,
      imageURL: req.body.imageURL
    });
    cake.save(function(err) {
      if (err) {
        return res.json({ error: err });
      }
      return res.json({ cake: cake });
    });
  }
}
