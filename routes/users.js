var express = require('express');
var routeLabel = require('route-label');

var router = express.Router();

// Wrap express.Router() instance with route-label
var namedRouter = routeLabel(router);

// Register routing as usual + label
namedRouter.get('list', '/', function (req, res) {
  res.send('this is user listing');
});

namedRouter.get('detail', '/:id', function (req, res) {
  res.send('this is user detail with ID ' + req.params.id);
});

// Export the express.Router() instance
module.exports = router;
