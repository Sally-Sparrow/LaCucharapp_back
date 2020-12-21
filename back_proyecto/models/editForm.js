// Devuelve las reservas con sus mesas por id
const getReservaById = (pId) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT reservas.fecha, reservas.hora_inicio, reservas.fk_cliente as idCliente, reservas.pax, reservas.notas, GROUP_CONCAT(mesas.numero) as mesas FROM restaurante.reservas INNER JOIN restaurante.tbi_reservas_mesas ON reservas.id = tbi_reservas_mesas.fk_reservas INNER JOIN restaurante.mesas ON mesas.id = tbi_reservas_mesas.fk_mesas WHERE reservas.id = ?', [pId], (error, row) => {
            if (error) reject(error);
            resolve(row[0]);
            console.log(row[0]);
        });
    });
};

//MODIFICA los datos del cliente por id

const updateClient = (pClienteId, { nombre, apellidos, telefono, email }) => {
    console.log(pClienteId, nombre, apellidos, telefono, email);
    return new Promise((resolve, reject) => {

        db.query('update clientes set nombre = ?, apellidos = ?, telefono = ?, email = ? where id = ? ', [nombre, apellidos, telefono, email, pClienteId], (error, result) => {
            if (error) reject(error);
            resolve(result);
        });
    });
};

// MODIFICA los datos de una reserva por id de la reserva  
const updateReserva = (pFkCliente, { fecha, hora, pax, notas }) => {
    return new Promise((resolve, reject) => {
        db.query('update reservas set fecha = ?, hora_inicio = ? ,pax = ?, notas = ? where reservas.id = ?', [fecha, hora, pax, notas, pFkCliente], (error, result) => {
            if (error) reject(error);
            resolve(result);
            console.log(result);
        });
    });
};


// ACTUALIZAR LAS MESAS DE UNA RESERVA -> PASANDO Nº MESA NUEVO, Nª MESA ANTIGUO Y LA ID DE LA RESERVA

const updateMesa = (pIdReserva, pMesaNueva, pMesaAntigua) => {
    return new Promise((resolve, reject) => {
        db.query(' UPDATE tbi_reservas_mesas SET fk_mesas = (SELECT mesas.id FROM restaurante.mesas WHERE mesas.numero = ?) WHERE fk_reservas = ? AND fk_mesas = (SELECT mesas.id FROM restaurante.mesas WHERE mesas.numero = ?)', [pMesaAntigua, pIdReserva, pMesaNueva], (error, result) => {
            if (error) reject(error);
            resolve(result);
            console.log(result);
        });
    });
};

module.exports = { getReservaById, updateClient, updateReserva, updateMesa }

