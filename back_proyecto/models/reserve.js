
// Crea los datos del cliente 
const resClient = (nombre, apellidos, telefono, email) => {
    return new Promise((resolve, reject) => {
        db.query('insert into restaurante.clientes (nombre, apellidos, email, telefono) values (?, ?, ?, ? )', [nombre, apellidos, email, telefono], (error, result) => {
                if (error) reject(error);
                resolve(result);
            }
        )
    });
}

//Crea los datos del servicio 

const insertService = (fecha, hora_inicio, pax, notas, fk_cliente) => {
    return new Promise((resolve, reject) => {
        db.query('insert into restaurante.servicios (fecha, hora_inicio, pax, notas, fk_cliente) values (?, ?, ?, ?, ?)', [fecha, hora_inicio, pax, notas, fk_cliente], (error, result) => {
                if (error) reject(error);
                resolve(result);
            });
    });
};

// Id del servicio 
const getIdService = (fecha, hora_inicio, fk_cliente) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT servicios.id FROM servicios WHERE servicios.fecha = ? AND servicios.hora_inicio = ? AND servicios.fk_cliente = ?', [fecha, hora_inicio, fk_cliente], (error, result) => {
            if (error) reject(error);
            resolve(result);
        });
    });
};



//Crea el número de mesa 

const resTable = (numero) => {
    return new Promise((resolve, reject) => {
        db.query('insert into restaurante.mesas (numero) value (?)', [numero], (error, result) => {
            if (error) reject(error);
            resolve(result);
        });
    });
};


//COMPROBAR SI EL CLIENTE EXISTE
const buscarIdCliente = (pClienteNombre, pClienteApellido, pClienteTelefono) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT clientes.id FROM restaurante.clientes WHERE clientes.nombre = ? AND clientes.apellidos = ? AND clientes.telefono = ?', [pClienteNombre, pClienteApellido, pClienteTelefono], (error, result) => {
            if (error) reject(error);
            resolve(result);
        });
    });
};

const insertClient = ( pClienteNombre, pClienteApellido, pClienteTelefono, pClienteEmail ) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO clientes ( nombre, apellidos, telefono, email ) VALUES (?, ?, ?, ?)', [pClienteNombre, pClienteApellido, pClienteTelefono, pClienteEmail], (error, result) => {
            if (error) reject(error);
            resolve(result);
        });
    });
};





module.exports = {
    resClient, resTable, insertService, buscarIdCliente, insertClient, getIdService
}

