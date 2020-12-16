const router = require('express').Router();
const { json } = require('express');
const { getReservasByFecha, getClienteById } = require('../../models/book');

//Devuelve los datos de reservas por fecha para el componente book
router.get('/:fecha', async (req, res) => {
    try {
        const reservas = await getReservasByFecha(req.params.fecha);
        for (let reserva of reservas) {
            reserva.cliente = await getClienteById(reserva.idCliente);   
        }
        res.json(reservas);
    } catch (error) {
        res.json({ error: error.message })
    }
});

module.exports = router;




// reserva.hora = await getHoraByIdServicios(reserva.fk_servicios);
//             console.log(reserva.fk_mesas);
//             let fkMesas = reserva.fk_mesas.split(',');
//             console.log(fkMesas);
//             const mesas = [];
//             for (let mesa of fkMesas) {
//                 let numeroMesa = await getNumeroMesaById(mesa)
//                 mesas.push(numeroMesa[0].numero);
//             }
//             reserva.mesas = mesas;
//             res.json(reserva);
//             console.log(mesas);