'use strict';

const controller = require('./controller');

module.exports = function (app) {
  app.route('/about')
    .get(controller.about);
  app.route('/distance/:city')
    .get(controller.getDistance);
  app.route('/distance')
    .post(controller.postDistance);
  app.route('/distance')
    .put(controller.putDistance);
  app.route('/distance')
    .delete(controller.deleteDistance);
};