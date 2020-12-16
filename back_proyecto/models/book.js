// Devuelve las reservas por fecha
const getReservasByFecha = (pFecha) => {
    return new Promise((resolve, reject) => {
        db.query('select reservas.pax, reservas.notas, reservas.fk_clientes, reservas.fk_servicios, group_concat(reservas.fk_mesas) as fk_mesas from reservas where  reservas.fecha = ?  group by reservas.fk_servicios', [pFecha], (error, result) => {
            if (error) reject(error);
            resolve(result);
        });
    });
};

//Devuelve los datos de un cliente por id
const getClienteById = (pIdCliente) => {
    return new Promise((resolve, reject) => {
        db.query('select c.nombre, c.apellidos, c.telefono from clientes as c where c.idclientes= ?', [pIdCliente], (error, rows) => {
            if (error) reject(error);
            resolve(rows[0]);
        });
    });
};

const getHoraByIdServicios = (pIdservicio) => {
    return new Promise((resolve, reject) => {
        db.query('select servicios.hora_inicio from servicios where servicios.idservicios = ?', [pIdservicio], (error, rows) => {
            if (error) reject(error);
            resolve(rows[0]);
        });
    });
};

const getNumeroMesaById = (pIdmesas) => {
    return new Promise((resolve, reject) => {
        db.query('select mesas.numero from mesas where mesas.idmesas = ?', [pIdmesas], (error, rows) => {
            if (error) reject(error);
            resolve(rows);
        });
    });
};

module.exports = { getReservasByFecha, getClienteById, getHoraByIdServicios, getNumeroMesaById };