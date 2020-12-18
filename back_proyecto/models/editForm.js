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

module.exports = { getReservaById }

