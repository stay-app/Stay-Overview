var faker = require('faker');
var loremHipsum = require('lorem-hipsum');

//category generator
var category = () => {
  var options = ['WELLNESS CLASS', 'HISTORY WALK', 'FOOD WALK', 'BAR CRAWL', 'COOKING CLASS', 'PHOTO SHOOT', 'WORKSHOP', 'BURLESQUE'];
  return options[Math.floor(Math.random()*8)]
}

//star generator
var getStars = () => {
  var num = Math.random()*5;
  if (num < 1) {
    return null;
  }
  return num.toFixed(2);
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
          cat: category(),
          desc: loremHipsum({  sentenceLowerBound: 2, sentenceUpperBound: 5 }),
          price: Math.floor(faker.finance.amount()),
          star: getStars(),
          url: faker.image.imageUrl()
        })
    }
    fullList.push(listing)
  }
  return fullList;
}


exports.createData = createData();