const router = require('express').Router();
const { insertService, insertTable, buscarIdCliente, insertClient, lastIdCreate } = require('../../models/reserve');

// //Comprobar si el cliente existe 
// router.get('/buscarId', async (req, res) => {
//     try {
//         const idCliente = await buscarIdCliente(req.body.nombre, req.body.apellidos, req.body.telefono);
//         idCliente.reserva = idCliente;
//         res.json(idCliente);
//     } catch (error) {
//         res.json({ error: error.message });

//     }
// });

// //ID del último cliente creado
// router.get('/id', async (req, res) => {
//     try {
//         const idCliente = await lastIdCreate(req.params.clienteId);
//         idCliente.reserva = idCliente;
//         res.json(idCliente);
//     } catch (error) {
//         res.json({ error: error.message });
//         console.log(idCliente);
//     }
// });


// //Datos del cliente
// router.post('/nueva', async (req, res) => {
//     try {
//         const reserva = await insertClient(req.body.nombre, req.body.apellidos, req.body.telefono, req.body.email);
//         if (reserva.affectedRows === 1) {
//             res.json({ mensaje: 'Todo ok' });
//         } else {
//             res.json({ error: 'No se ha podido completar' });
//         }
//     } catch (error) {
//         res.json({ error: error.message });
//     }
// });

// //Datos de la mesa 
// router.post('/mesa', async (req, res) => {
//     try {
//         const mesaReserva = await insertTable(req.params.numero);
//         if (mesaReserva.affectedRows === 1) {
//             res.json({ mensaje: 'Número de mesa creado' })
//         } else {
//             res.json({ error: 'No se ha podido crear la mesa' })
//         }
//     } catch (error) {
//         {
//             res.json({ error: error.message });
//         }

//     }
// });


//Datos de la reserva 


module.exports = router;
