require('../models/cart');
const mongoose = require('mongoose');

const Cart = mongoose.model('Cart');

module.exports.create = (req, res, next) => {
    var cart = new Cart();
    cart.courseId = req.body.courseId;
    cart.title = req.body.title;
    cart.description = req.body.title;
    cart.price = req.body.price;
    cart.quantity = 1;
    cart.save((err, doc) => {
        if (!err)
            res.send(doc);
        else { 
          return next(err);
        }

    });
}

module.exports.get = (req, res, next) => {
    Cart.find((error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
}

module.exports.update = (req, res, next) => {
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
}

module.exports.delete = (req, res, next) => {
    Cart.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.status(200).json({
            msg: data
          })
        }
    })
}