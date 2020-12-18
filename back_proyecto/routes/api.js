const router = require('express').Router();

//const { route } = require('.');
const apiBookRouter = require('./api/book');
const apiMapRouter = require('./api/map');
const apiReserveRouter = require('./api/reserve');
const apiEditFormsRouter = require('./api/editForms');


router.use('/book', apiBookRouter);
router.use('/map', apiMapRouter); 
router.use('/reserve', apiReserveRouter);
router.use('/book/edit', apiEditFormsRouter);

module.exports = router;