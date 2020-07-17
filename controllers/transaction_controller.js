// @desc   Get all transactions
// @route  GET /api/v1/transactions
// @access public
exports.getTransactions = (req, res, next) => {
    res.send('GET transactions');
}
// @desc   Add a transaction
// @route  POST /api/v1/transactions
// @access public
exports.addTransactions = (req, res, next) => {
    res.send('POST transactions');
}
// @desc   Remove a transaction
// @route  DELETE /api/v1/transactions/:id
// @access public
exports.removeTransactions = (req, res, next) => {
    res.send('DELETE transactions');
}