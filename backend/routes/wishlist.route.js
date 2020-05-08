var express = require('express');
const app = express();
const wishlistRoute = express.Router();

// Cart model
let Cart = require('../models/cart');
let Item = require('../models/item');

/* GET all Courses here. */
wishlistRoute.route('/').get((req, res) => {
    Item.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

wishlistRoute.route('/add').put((req, res, next) => {
    Item.findOne(req.params.id).exec(
      Cart.create(req.body, (error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
    );
})

module.exports = wishlistRoute;