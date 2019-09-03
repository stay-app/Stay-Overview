const express = require('express');
const app = express();
const port = 1129;
const mongoose = require('mongoose');
const seed = require('./scripts/seed')
mongoose.connect('mongodb://localhost/nearby');


app.use(express.static('public'))

app.get('/api/nearby/', (req, res) => {
  let id = req.query.id;
  seed.listing.find( { listId : id }, (err, record) =>{
    if (err) console.log('find error');
    res.send(record);
  });
})


app.listen(port, ()=> console.log(`listening on port ${port}!`))
