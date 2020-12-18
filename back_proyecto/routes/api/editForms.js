const router = require('express').Router();
const { getReservaById } = require('../../models/editForm');
const { getClienteById } = require('../../models/book');


//todo  FALTA PROBAR LA PETICIÓN 
router.get('/:id', async (req, res) => {
    try {
        let editarReserva = await getReservaById( req.params.id );
        console.log(editarReserva.idCliente);
        editarReserva.cliente = await getClienteById( editarReserva.idCliente );
        res.json({ editarReserva });
    } catch (error) {
        res.json({ error: error.message });
    }
});


module.exports = router; 