const router = require('express').Router();

const { getMesasByEspacio } = require('../../models/map');

router.get('/:espacio', async (req, res) => {
    try{
        const rows = await getMesasByEspacio( req.params.espacio );
        res.json(rows);
    }catch (error) {
        res.json({ error: error.message });
    }
});

module.exports =  router;