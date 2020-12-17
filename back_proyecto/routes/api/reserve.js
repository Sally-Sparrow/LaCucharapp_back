const router = require('express').Router();
const { buscarIdCliente, insertClient, insertReserva, getIdMesaByNumero, insertMesasEnReserva, getMesasOcupadasByFechaHora } = require('../../models/reserve');


//DEVUELVE los numeros de mesa que tienen reserva en una fecha y una hora
router.get('/', async (req, res) => {
    try{
        const mesasOcupadas = await getMesasOcupadasByFechaHora( req.body.fecha, req.body.hora );
        console.log(mesasOcupadas);
        res.json(mesasOcupadas);
    }catch( error ){ res.json({ error: error.message }); }
});


// INSERTA DATOS DE RESERVA DEL FORM
router.post('/nueva', async (req, res) => {
 try{
    //* comprueba si existe el cliente -> recupera su id
    let idCliente = await buscarIdCliente(req.body.nombre, req.body.telefono);
    console.log('El cliente ya existe, su id', idCliente);
    //* si no existe -> inserta el cliente
    if (idCliente.length == 0) {
        console.log('el cliente no existe');
        await insertClient(req.body.nombre, req.body.apellidos, req.body.telefono, req.body.email); //TODO ojo al mail si no viene el dato
        //* Y devuelve el id del cliente insertado
        idCliente = await buscarIdCliente(req.body.nombre, req.body.telefono);
        console.log('cliente insertado, id recuperada:', idCliente );
    } 
    //* si existe o ya está insertado, sigue:
    if (idCliente.length > 0) { 
        idCliente = idCliente[0];
        console.log('fin comprobar y recuperar id cliente');
        console.log(idCliente);
    }

    //* INSERTAR reserva y devolver idReserva    
    const resultInsertReserva = await insertReserva(req.body.fecha, req.body.hora, idCliente.id, req.body.personas, req.body.nota );
    const idReserva = resultInsertReserva.insertId;
    console.log(idReserva);
        if(resultInsertReserva.affectedRows === 1){
             res.json({ 
                 mensaje: 'Reserva insertada correctamente' });
        }else {
             res.json({ error: 'No se ha podido insertar la reserva' });
        }
    //* INSERTAR las mesas de cada reserva (tbi_reservas_mesas)
    //* RECUPERAR la id de cada mesa por su numero
    for(let mesas of req.body.mesas){
        let idMesa = await getIdMesaByNumero( mesas.numero );
        console.log('recupera id mesa', idMesa[0]);
        idMesa = idMesa[0];
        //* INSERTAR en tbi-reservas-mesas cada mesa
        const resultInsertMesasReserva = await insertMesasEnReserva( idReserva, idMesa.id );
        console.log('mesa insertada con idReserva', idReserva, 'e idMesa', idMesa.id );;
    }

    }catch (error) {
        res.json({ error: error.message });
    }
});



module.exports = router;
