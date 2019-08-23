const express = require('express');
const app = express();
const port = 1128;
const mongoose = require('mongoose');
const seed = require('./dummy-data.js')
mongoose.connect('mongodb://localhost/nearby');

let listingSchema = mongoose.Schema({
    listId: Number,
    nearby: [{
      nearId: Number,
      cat: String,
      desc: String,
      price: Number,
      star: Number,
      url: String
    }]
});


let Listing = mongoose.model('Listing', listingSchema);

var setSeed = () => {
  var allRecord = seed.createData;
  Listing.remove({}, function(err) {
    console.log('collection removed')
  })
  .then(
    Listing.insertMany(allRecord, ((err, docs) => {
      if (err) console.log('Save failed');
      console.log('inserted')
  })))
}

setSeed();