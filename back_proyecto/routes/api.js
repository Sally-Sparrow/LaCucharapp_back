const router = require('express').Router();

const { route } = require('.');
const apiBookRouter = require('./api/book');
const apiReserveRouter = require('./api/reserve');


router.use('/reserve', apiReserveRouter);
router.use('/book', apiBookRouter);

module.exports = router;