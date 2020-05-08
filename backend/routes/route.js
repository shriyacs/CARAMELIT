const express = require('express');
const router = express.Router();

const ctrlCart = require('../controller/cart.controller');

router.post('/create', ctrlCart.create);
router.get('/',ctrlCart.get)
router.put('/update/:id',ctrlCart.update)
router.delete('/delete/:courseId',ctrlCart.delete)

module.exports = router;