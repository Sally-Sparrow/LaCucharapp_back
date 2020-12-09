const router = require('express').Router();
const { Router } = require('express');
const { getByFecha, getMesasOfServicio, getReservaById } = require('../../models/book');



//* RECUPERA los datos de todas las reservas por fecha
router.get('/', async (req, res) => {
    try {
        const reservas = await getByFecha('2020-11-30');
        for (let reserva of reservas) {
            reserva.mesas = await getMesasOfServicio(reserva.id)
            console.log(reservas);
        }
        res.json(reservas);
    } catch (error) { res.json({ error: error.message }); }

});



//* EDITAR RESERVA
//* Recupera los datos de una única reserva por su id
router.get('/edit/:idservicio', async (req, res) => {
    try {
        //console.log(req.params);
        const reserva = await getReservaById(req.params.idservicio);
        reserva.mesas = await getMesasOfServicio(req.params.idservicio);
        reserva.id = req.params.idservicio;
        console.log(reserva);
        //res.json( reserva );
        res.render('reservas/edit', { reserva });

    } catch (error) { res.json({ error: error.message }) }
});
//* Envía los datos editados de la reserva
router.put('/edit/:idservicio', async (req, res) => {
    try {
        const reserva = await getReservaById(req.params.idservicio);
        if (result.affectedRows === 1) {
            const reservaActualizada = await getReservaById(req.body.reserva.id);
            res.json({
                mensaje: 'La reserva se ha actualizado',
                reservaActualizada
            });
        } else { res.json({ error: 'No se ha podido actualizar la reserva' }) }
        res.json(result);
    } catch (error) {
        res.json({ error: error.message });
    }
});



module.exports = router;