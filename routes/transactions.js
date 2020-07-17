const express = require('express');
const router = express.Router();
const { getTransactions, addTransactions, removeTransactions } = require('../controllers/transaction_controller')

router
    .route('/')
    .get(getTransactions)
    .post(addTransactions)

router
    .route('/:id')
    .delete(removeTransactions)

module.exports = router;