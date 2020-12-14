const router = require('express').Router();
const { resClient, insertService, resTable, buscarIdCliente, insertClient, getIdService } = require('../../models/reserve');

router.post('/nueva', async (req, res) => {
    try {
        //SI EXISTE CLIENTE -> recupera su id
        let idCliente = await buscarIdCliente(req.body.nombre, req.body.apellidos, req.body.telefono);
        if(idCliente.length == 0) {
        //SI NO EXISTE -> inserta el cliente
            await insertClient(req.body.nombre, req.body.apellidos, req.body.telefono, req.body.email); //TODO ojo al mail si no viene el dato
        //Devuelve el id del cliente insertado
            console.log('cliente insertado en js');
            idCliente = await buscarIdCliente(req.body.nombre, req.body.apellidos, req.body.telefono);
            console.log('recupera id insertado en js');
        }if(idCliente.length > 0) {
            console.log('entra en el siguiente if si idCliente.length > 0');
        //con el idCliente, inserta servicio (servicio.fk_cliente = cliente.id)
            await insertService(req.body.fecha, req.body.hora_inicio, req.body.pax, req.body.notas, idCliente[0].id);
        //devuelve la id del servicio insertado
            const idServicio = await getIdService(req.body.fecha, req.body.hora_inicio, idCliente[0].id);
        }
        //TODO HASTA AQUI FUNCIONA :)
        //console.log(idServicio);
        //todo Seguir por id de mesa
    } catch (error) {
        res.json({ error: error.message });
    }
})

//! - query ifExists
// router.get('/nueva', async (req, res) => {
//     try{
//         const idCliente = getIdClienteIfExist('Alaska', 'Thunderfuck', 640927346 );
//     }catch(error){
//         res.json({error: error.message});
//     }
// });



module.exports = router;
