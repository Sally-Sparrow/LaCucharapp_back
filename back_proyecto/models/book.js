
const getAll = () => {
    return new Promise( (resolve, reject) =>{
        db.query( 'SELECT servicios.fecha, servicios.hora_inicio, servicios.pax, CONCAT(clientes.nombre, " ", clientes.apellidos) as "nombre", clientes.telefono FROM restaurante.servicios, restaurante.clientes WHERE servicios.fk_cliente = clientes.id', (error, rows) => {
            if(error) reject(error);
            resolve(rows);
            const reserva = rows;
            console.log(reserva);
        });
    }); 
    
};

const getByFecha = ( pFecha ) => {
    return new Promise( (resolve, reject) => {
        db.query( 'SELECT s.*, c.nombre, c.apellidos, c.telefono FROM restaurante.servicios s, restaurante.clientes c WHERE s.fk_cliente = c.id AND s.fecha = ?;', [pFecha], (error, rows) =>{
            if(error) reject(error);
            resolve(rows);
        });
    });
}

const getMesasOfReserva = ( pReservaId ) => {
    return new Promise( (resolve, reject) => {
        db.query( 'SELECT m.numero FROM tbi_servicios_mesas tbi, restaurante.mesas m WHERE tbi.fk_mesas = m.id AND tbi.fk_servicio = ?;', [pReservaId], (error, rows) => {
            if(error) reject(error);
            resolve(rows);
        });
    });
}

module.exports = { getAll, getByFecha, getMesasOfReserva };