const router = require('express').Router();
const { insertService, resTable, buscarIdCliente, insertClient, insertHora, lastIdCreate } = require('../../models/reserve');

//Datos del cliente
router.post('/nueva', async (req, res) => {
    try {
        const reserva = await insertClient(req.body.nombre, req.body.apellidos, req.body.telefono, req.body.email);
        if (reserva.affectedRows === 1) {
            res.json({ mensaje: 'Todo ok' })
        } else {
            res.json({ error: 'No se ha podido completar' })
        }
    } catch (error) {
        res.json({ error: error.message });
    }
});

//ID del último cliente creado
/* router.get('/id', async (req, res) => {
    try {
        const cliente = await lastIdCreate(req.params.clienteId);
        cliente.reserva = cliente;
        res.json(cliente);
    } catch (error) {
        res.json({ error: error.message });
        console.log(cliente);
    }
}); */


module.exports = router;
