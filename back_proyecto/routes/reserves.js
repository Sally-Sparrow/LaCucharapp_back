const router = require('express').Router();
const reserve = require('../models/reserve');

const { resClient, resService } = require('../models/reserve');


router.post('/new', async (req, res) => {
    console.log(req.body);
    const result = await resClient(req.body);
    console.log(result);
})


module.exports = router;