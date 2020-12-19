const router = require('express').Router();
const { getReservaById } = require('../../models/editForm');
const { getClienteById } = require('../../models/book');


// Recoge los datos de la reserva a editar
router.get('/:id', async (req, res) => {
    try {
        let editarReserva = await getReservaById(req.params.id);
        console.log(editarReserva.idCliente);
        editarReserva.cliente = await getClienteById(editarReserva.idCliente);
        res.json(editarReserva);
    } catch (error) {
        res.json({ error: error.message });
    }
});

//RECOGE los datos de la reserva ya editada 

router.put('/editada', async (req, res) => {
    try {
        //Inserta datos del cliente 
        await insertClient(req.body.nombre, req.body.apellidos, req.body.telefono, req.body.email, req.body.id);
    } catch (error) {
        res.json({ error: error.message });
    }
})

module.exports = router; 