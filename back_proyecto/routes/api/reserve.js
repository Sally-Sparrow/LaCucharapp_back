const router = require('express').Router();
const { insertService, insertTable, buscarIdCliente, insertClient, insertHora, lastIdCreate } = require('../../models/reserve');


/* const idServicio = await getIdService(req.body.fecha, req.body.hora_inicio, idCliente); */
//SI EXISTE CLIENTE -> recupera su id
async const idCliente = await buscarIdCliente(req.body.nombre, req.body.apellidos, req.body.telefono);
if (idCliente.length == 0) {
    //SI NO EXISTE -> inserta el cliente
    await insertClient(req.body.nombre, req.body.apellidos, req.body.telefono, req.body.email); //TODO ojo al mail si no viene el dato
    console.log(idCliente);
    /*  //Devuelve el id del cliente insertado
     console.log('cliente insertado en js');
     idCliente = await buscarIdCliente(req.body.nombre, req.body.apellidos, req.body.telefono);
     console.log('recupera id insertado en js');
 } if (idCliente.length > 0) {
     console.log('entra en el siguiente if si idCliente.length > 0');
     //con el idCliente, inserta servicio (servicio.fk_cliente = cliente.id)
     await insertService(req.body.fecha, req.body.hora_inicio, req.body.pax, req.body.notas, idCliente[0].id);
     //devuelve la id del servicio insertado
     const idServicio = await getIdService(req.body.fecha, req.body.hora_inicio, idCliente[0].id); */
























    //---------------------------------------------------------------------------------------------------
    /* //Datos del cliente
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
    
    router.post('/mesa', async (req, res) => {
        try {
            const mesaReserva = await insertTable(req.params.numero);
            if (mesaReserva.affectedRows === 1) {
                res.json({ mensaje: 'Número de mesa creado' })
            } else {
                res.json({ error: 'No se ha podido crear la mesa' })
            }
        } catch (error) {
            {
                res.json({ error: error.message });
            }
    
        }
    });
    
    
    
    //ID del último cliente creado
    router.get('/id', async (req, res) => {
        try {
            const idCliente = await lastIdCreate(req.params.clienteId);
            idCliente.reserva = idCliente;
            res.json(idCliente);
        } catch (error) {
            res.json({ error: error.message });
            console.log(idCliente);
        }
    }); */

}


module.exports = router;
