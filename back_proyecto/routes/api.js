const router = require('express').Router();

const { route } = require('.');
const apiBookRouter = require('./api/book');

router.use('/book', apiBookRouter);

module.exports = router;