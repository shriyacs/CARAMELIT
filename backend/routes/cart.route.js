const express = require('express');
const app = express();
const cartRoute = express.Router();

// Cart model
let Cart = require('../models/cart');

// Add To Cart
cartRoute.route('/create').post((req, res, next) => {
  Cart.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

//Get All coursers
cartRoute.route('/').get((req, res) => {
  Cart.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update cart
cartRoute.route('/update/:id').put((req, res, next) => {
    Cart.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Data updated successfully')
      }
    })
  })

cartRoute.route('/delete/:id').delete((req, res, next) => {
    Cart.findOneAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })

module.exports = cartRoute;