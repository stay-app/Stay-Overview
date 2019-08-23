var faker = require('faker');
var loremHipsum = require('lorem-hipsum');

//category generator
var getCategory = () => {
  var options = ['WELLNESS CLASS', 'HISTORY WALK', 'FOOD WALK', 'BAR CRAWL', 'COOKING CLASS', 'PHOTO SHOOT', 'WORKSHOP', 'OUTDOOR SPORTS'];
  return options[Math.floor(Math.random()*8)]
}

//star generator
var getStars = () => {
  var num = Math.random() * 5;
  if (num < 1) {
    return null;
  }
  return num.toFixed(2);
}

//random image generator
var getImage = () => {
  var imgNum = Math.ceil(Math.random() * 100);
  return `https://nearby.s3-us-west-1.amazonaws.com/${imgNum}.jpg`
}

//for each of 100 listings, push to nearby the result 20 times.
var createData = () => {
  var fullList = [];
  for (var i = 1; i < 101; i++) {
    var listing = {
      listId: i,
      nearby: []
    }
    for (var j = 1; j < 21; j++) {
      listing.nearby.push(
        {
          nearId: j,
          cat: getCategory(),
          desc: loremHipsum({  sentenceLowerBound: 2, sentenceUpperBound: 5 }),
          price: Math.floor(faker.finance.amount()),
          star: getStars(),
          url: getImage()
        })
    }
    fullList.push(listing)
  }
  return fullList;
}


module.exports.createData = createData();