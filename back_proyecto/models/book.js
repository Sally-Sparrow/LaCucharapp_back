
const getAll = () => {
    return new Promise( (resolve, reject) =>{
        db.query( 'SELECT servicios.fecha, servicios.hora_inicio, mesas.numero as "mesa", CONCAT(clientes.nombre, " ", clientes.apellidos) as "nombre", clientes.telefono FROM restaurante.servicios, restaurante.mesas, restaurante.clientes WHERE mesas.id = servicios.fk_mesa AND clientes.id = servicios.fk_cliente;', (error, rows) => {
            if(error) reject(error);
            resolve(rows);
        });
    });    
};

module.exports = { getAll };