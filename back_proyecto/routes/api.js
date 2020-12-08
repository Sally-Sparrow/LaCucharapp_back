const router = require('express').Router();

//const { route } = require('.');
const apiBookRouter = require('./api/book');
const apiMapRouter = require('./api/map');

router.use('/book', apiBookRouter);
router.use('/map', apiMapRouter); 

module.exports = router;