const express = require('express');
const app = express();
const port = 5004;
const mongoose = require('mongoose');
const seed = require('./scripts/seed')
mongoose.connect('mongodb://database/nearby');


app.use(express.static('public'))

app.get('/api/nearby/:id', (req, res) => {
  let id = req.params.id;
  seed.listing.find( { listId : id }, (err, record) =>{
    if (err) console.log('find error');
    res.send(record);
  });
})


app.listen(port, ()=> console.log(`listening on port ${port}!`))
