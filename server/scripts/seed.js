const express = require('express');
const app = express();
const port = 1128;
const mongoose = require('mongoose');
const seed = require('./dummy-data.js');
var mongoUrl2 = 'mongodb://database/nearby'

mongoose.connect(mongoUrl2, {useNewUrlParser: true});

const listingSchema = mongoose.Schema({
  listId: Number,
  nearby: [{
    nearId: Number,
    cat: String,
    desc: String,
    price: Number,
    star: Number,
    url: String,
  }],
});


const Listing = mongoose.model('Listing', listingSchema);

const setSeed = () => {
  const allRecord = seed.createData;
  Listing.remove({}, (err) => {
    console.log('collection removed');
  })
    .then(
      Listing.insertMany(allRecord, ((err, docs) => {
        if (err) console.log('Save failed');
        console.log('inserted');
        mongoose.disconnect();
      })),
    );
};

// setSeed();
// run: docker exec -it <nearby_container> npm run seed 
// to seed through docker
exports.setSeed = setSeed;
exports.schema = listingSchema;
exports.listing = Listing;
