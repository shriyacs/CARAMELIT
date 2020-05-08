var Item = require('../models/item');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/meandatabase');
var items = [
  new Item({
    "title": "React_Course",

    "description": "A quick and simplified answer is that Lorem Ipsum refers to text that the DTP (Desktop Publishing) industry use as replacement text when the real text is not available.",
    "price": 2500
  }),
  new Item({
    "title": "Angular_Course",

    "description": "A quick and simplified answer is that Lorem Ipsum refers to text that the DTP (Desktop Publishing) industry use as replacement text when the real text is not available.",
    "price": 3000
  }),
  new Item({
    "title": "Redux_Course",

    "description": "A quick and simplified answer is that Lorem Ipsum refers to text that the DTP (Desktop Publishing) industry use as replacement text when the real text is not available.",
    "price": 1500
  }),
  new Item({
    "title": "Front-End_Course",

    "description": "A quick and simplified answer is that Lorem Ipsum refers to text that the DTP (Desktop Publishing) industry use as replacement text when the real text is not available.",
    "price": 1000
  }),
  new Item({
    "title": "Node_Course",

    "description": "A quick and simplified answer is that Lorem Ipsum refers to text that the DTP (Desktop Publishing) industry use as replacement text when the real text is not available.",
    "price": 1500
  }),
  new Item({
    "title": "AWS_Course",
    "description": "A quick and simplified answer is that Lorem Ipsum refers to text that the DTP (Desktop Publishing) industry use as replacement text when the real text is not available.",
    "price": 1000
  })
];

var done = 0;
for (var i = 0; i < items.length; i++) {
    items[i].save(function(err, result) {
        done++;
        if (done === items.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}