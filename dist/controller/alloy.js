'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _alloy = require('../model/alloy');

var _alloy2 = _interopRequireDefault(_alloy);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var config = _ref.config,
      db = _ref.db;

  var api = (0, _express.Router)();

  // '/v1/alloy' - GET all test accts
  api.get('/', function (req, res) {
    _alloy2.default.find({}, function (err, alloys) {
      if (err) {
        res.send(err);
      }
      res.json(alloys);
    });
  });

  // '/v1/alloy/:id' - GET a specific test acct
  api.get('/:id', function (req, res) {
    _alloy2.default.findById(req.params.id, function (err, alloy) {
      if (err) {
        res.send(err);
      }
      res.json(alloy);
    });
  });

  // '/v1/alloy/add' - POST - add a test acct
  api.post('/add', function (req, res) {
    var newAlloy = new _alloy2.default();
    newAlloy.name = req.body.name;
    newAlloy.ratio = req.body.ratio;

    newAlloy.save(function (err) {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: 'Alloy saved successfully' });
      }
    });
  });

  // '/v1/alloy/:id' - DELETE - remove a test acct
  api.delete('/:id', function (req, res) {
    _alloy2.default.remove({
      _id: req.params.id
    }, function (err, alloy) {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Alloy Successfully Removed" });
    });
  });

  // '/v1/alloy/:id' - PUT - update an existing record
  api.put('/:id', function (req, res) {
    _alloy2.default.findById(req.params.id, function (err, alloy) {
      if (err) {
        res.send(err);
      }
      newAlloy.name = req.body.name;
      newAlloy.ratio = req.body.ratio;

      alloy.save(function (err) {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'Alloy info updated' });
      });
    });
  });

  return api;
};
//# sourceMappingURL=alloy.js.map