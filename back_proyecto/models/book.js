// Devuelve las reservas con sus mesas por fecha (+ idCliente)
const getReservasByFecha = (pFecha) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT reservas.fecha, reservas.hora_inicio, reservas.fk_cliente as idCliente, reservas.pax, reservas.notas, GROUP_CONCAT(mesas.numero) as mesas FROM restaurante.reservas INNER JOIN restaurante.tbi_reservas_mesas ON reservas.id = tbi_reservas_mesas.fk_reservas INNER JOIN restaurante.mesas ON mesas.id = tbi_reservas_mesas.fk_mesas WHERE reservas.fecha = ? GROUP BY reservas.id', [pFecha], (error, result) => {
            if (error) reject(error);
            resolve(result);
        });
    });
};

//Devuelve los datos de un cliente por id
const getClienteById = (pIdCliente) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT clientes.nombre, clientes.apellidos, clientes.telefono, clientes.email FROM clientes WHERE clientes.id = ?', [pIdCliente], (error, rows) => {
            if (error) reject(error);
            resolve(rows[0]);
        });
    });
};


module.exports = { getReservasByFecha, getClienteById };