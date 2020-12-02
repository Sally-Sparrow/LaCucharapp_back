const router = require('express').Router();
const { getAll, getByFecha, getMesasOfReserva } = require('../../models/book');

router.get('/', async (req, res) => {
    try{
        const servicios = await getByFecha( '2020-11-30' );
        for(let servicio of servicios){
            servicio.mesas = await getMesasOfReserva(servicio.id)
            console.log(servicio.id);
            console.log( servicio );
        }
        res.json(servicios);
        //console.log(rows);
    }catch (error){  res.json({ error: error.message });  }
    
});

module.exports = router;