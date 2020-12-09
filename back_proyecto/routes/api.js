const router = require('express').Router();

//const { route } = require('.');
const apiBookRouter = require('./api/book');
const apiMapRouter = require('./api/map');
const apiReserveRouter = require('./api/reserve');


router.use('/reserve', apiReserveRouter);
router.use('/book', apiBookRouter);
router.use('/map', apiMapRouter); 

module.exports = router;