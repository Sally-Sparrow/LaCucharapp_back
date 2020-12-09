const router = require('express').Router();
const { resClient, resService, resTable } = require('../../models/reserve');

//Crea una nueva reserva 
/* router.post('/nueva', async (req, res) => {
    const reserva = await resClient(req.body);
    reserva.servicios = await resService(req.body);
    reserva.numero = await resTable(req.body);
    res.json(reserva);
    console.log(reserva);
}) */


router.post('/nueva', async (req, res) => {
    try {
        const reserva = await resClient(req.body.nombre, req.body.apellidos, req.body.telefono, req.body.email);
        reserva.servicios = await resService(req.body.fecha, req.body.hora_inicio, req.body.pax, req.body.notas);
        reserva.numero = await resTable(req.body.numero)
        if (reserva.affectedRows === 1) {
            res.json({
                mensaje: 'Reserva anotada',
                reserva: reserva
            });
            console.log(res.json);
        } else {
            res.json({ error: 'No se ha podido completar la reserva' })
        }
    } catch (error) {
        res.json({ error: error.message });
        console.log(res.json);
    }
})



module.exports = router;
