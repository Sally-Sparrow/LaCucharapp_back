const router = require('express').Router();
const { getReservaById, updateClient, updateReserva, updateMesa } = require('../../models/editForm');
const { getClienteById } = require('../../models/book');
const { buscarIdCliente, getIdMesaByNumero, insertClient, insertReserva } = require('../../models/reserve');

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

//ACTUALIZA los datos de la reserva -> Cliente, - Reserva y Mesa


router.put('/cliente', async (req, res) => {
    try {
        let idCliente = await updateClient(req.body.idReserva, req.body);
        console.log('Cliente id', idCliente);
        const result = await getClienteById(req.body.nombre, req.body.telefono);
        const clienteActualizado = await updateReserva(req.body.id, req.body);
        if (clienteActualizado.affectedRows === 1) {
            res.json({
                mensaje: 'El cliente se ha actualizado',
            });
        } else {
            res.json({ error: 'No se ha podido actualizar' });
        }
    } catch (error) {
        res.json({ error: error.message });
    }
})




module.exports = router; 