// Devuelve las reservas con sus mesas por id
const getReservasById = (pId) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT reservas.fecha, reservas.hora_inicio, reservas.fk_cliente as idCliente, reservas.pax, reservas.notas, GROUP_CONCAT(mesas.numero) as mesas FROM restaurante.reservas INNER JOIN restaurante.tbi_reservas_mesas ON reservas.id = tbi_reservas_mesas.fk_reservas INNER JOIN restaurante.mesas ON mesas.id = tbi_reservas_mesas.fk_mesas WHERE reservas.id = ? GROUP BY reservas.fecha', [pId], (error, result) => {
            if (error) reject(error);
            resolve(result);
        });
    });
};

