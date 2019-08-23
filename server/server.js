const express = require('express');
const app = express();
const port = 1128;
const mongoose = require('mongoose');
const seed = require('./scripts/dummy-data')
mongoose.connect('mongodb://localhost/nearby');


app.listen(port, ()=> console.log(`listening on port ${port}!`))
