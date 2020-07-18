const express = require('express');
const router = express.Router();
const { getTransactions, addTransactions, removeTransactions } = require('../controllers/transaction_controller')

router
    .route('https://enigmatic-inlet-18390.herokuapp.com/')
    .get(getTransactions)
    .post(addTransactions)

router
    .route('https://enigmatic-inlet-18390.herokuapp.com/:id')
    .delete(removeTransactions)

module.exports = router;