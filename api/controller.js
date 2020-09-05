'use strict';

var properties = require('../package.json')
var distance = require('../service/distance');

var controllers = {
  about: function (req, res) {
    var aboutInfo = {
      name: properties.name,
      version: properties.version
    }
    res.json(aboutInfo);
  },
  getDistance: function (req, res) {
    distance.find(req, res, function (err, dist) {
      if (err)
        res.send(err);
      res.json(dist);
    });
  },
  postDistance: function (req, res) {
    console.log(JSON.stringify(req.body));
    distance.post(req, res, function (err, dist) {
      if (err)
        res.send(err);
      res.json(dist);
    });
  },
  putDistance: function (req, res) {
    distance.put(req, res, function (err, dist) {
      if (err)
        res.send(err);
      res.json(dist);
    });
  },
  deleteDistance: function (req, res) {
    distance.delete(req, res, function (err, dist) {
      if (err)
        res.send(err);
      res.json(dist);
    });
  },
};

module.exports = controllers;