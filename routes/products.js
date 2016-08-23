var express = require('express');
var routeLabel = require('route-label');

var router = express.Router();

// DOC: Wrap express.Router() instance with route-label
var namedRouter = routeLabel(router);

// DOC: Register routing as usual + label
namedRouter.get('list', '/', function (req, res) {
  res.send('this is product listing');
});

namedRouter.get('detail', '/:id', function (req, res) {
  res.send('this is product detail with ID ' + req.params.id);
});

namedRouter.post('detail', '/:id', function (req, res) {
  res.send('this is POST attempt to product detail with ID ' + req.params.id);
});

// DOC: Export the express.Router() instance
module.exports = router;
