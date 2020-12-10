const router = require('express').Router();
const { resClient, resService, resTable, buscarIdCliente, insertClient, getIdService } = require('../../models/reserve');

router.post('/nueva', async (req, res) => {
    try {
        const idCliente = await buscarIdCliente(req.body.nombre, req.body.apellidos, req.body.telefono);
        if (idCliente === null) {
            idCliente = await insertClient(req.body.nombre, req.body.apellidos, req.body.telefono, req.body.email);
        } if (idCliente != null) {
            await resService(req.body.fecha, req.body.hora_inicio, req.body.pax, req.body.notas, req.body.idCliente);
            const idServicio = await getIdService(req.body.fecha, req.body.hora_inicio, idCliente);
        }
        console.log(idServicio);
        //todo Seguir por id de mesa
        const reserva = await resClient(req.body.nombre, req.body.apellidos, req.body.telefono, req.body.email); //!ESTE MÉTODO ESTÁ REPETIDO */
        console.log(req.body);
        reserva.numero = await resTable(req.body.numero)
        if (reserva.affectedRows === 1) {
            res.json({
                mensaje: 'Reserva anotada',
                reserva: reserva
            });
        } else {
            res.json({ error: 'No se ha podido completar la reserva' })
        }
    } catch (error) {
        res.json({ error: error.message });
        console.log(res.json);
    }
})



module.exports = router;
