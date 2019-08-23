const express = require('express');
const app = express();
const port = 1128;
const mongoose = require('mongoose');
const seed = require('./scripts/seed')
mongoose.connect('mongodb://localhost/nearby');


app.get('/api/nearby/1', (req, res) => {
  //let id = req.query.id  Placeholder for proxy req ID
  let id = req.route.path.substring(12);
  seed.listing.find( { listId : id }, (err, record) =>{
    if (err) console.log('find error');
    console.log(record);
    res.send(record);
  });
})


app.listen(port, ()=> console.log(`listening on port ${port}!`))
