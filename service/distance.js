var circular = require('circular');
var request = require('request');

const apiKey = process.env.ZIPCODE_API_KEY || "hkCt1nW1wF1rppaEmoor7T9G4ta7R5wFSu8l1dokNz8y53gGZHDneWWVosbEYirC";
const zipCodeURL = 'https://www.zipcodeapi.com/rest/';

const bulkData = [
  { "city": 'London', "distance": '2km' },
  { "city": 'Berlin', "distance": '3500km' },
  { "city": 'Hongkong', "distance": '6500km' },
  { "city": 'London', "distance": '2km' },
];

var distance = {
  find: function (req, res, next) {
    //req.params.city
    console.log('get!!..')
    res.send({ status: "post", distance: bulkData.filter(x => x.city === 'London')[0] });

  },
  post: function (req, res, next) {
    console.log('post!!..')
    // console.log(JSON.stringify(req.body, circular()));
    res.send({ status: "post", distance: bulkData });
  },
  put: function (req, res, next) {
    console.log('put!!..')
    res.send({ status: "put" });
  },
  delete: function (req, res, next) {
    console.log('delete!!..')
    res.send({ status: "delete" });
  },
};

module.exports = distance;