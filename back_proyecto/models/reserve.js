
//COMPROBAR SI EL CLIENTE EXISTE 
const buscarIdCliente = (pClienteNombre, pClienteApellido, pClienteTelefono) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT clientes.id FROM restaurante.clientes   WHERE clientes.nombre = ? AND clientes.apellidos= ? AND clientes.telefono = ?', [pClienteNombre, pClienteApellido, pClienteTelefono], (error, result) => {
            if (error) reject(error);
            resolve(result);
        });
    });
};


// Crea los datos del cliente 
const insertClient = (nombre, apellidos, telefono, email) => {
    return new Promise((resolve, reject) => {
        db.query('insert into restaurante.clientes (nombre, apellidos, telefono, email ) values (?, ?, ?, ? )', [nombre, apellidos, telefono, email], (error, result) => {
            if (error) reject(error);
            resolve(result);
        }
        )
    });
}

//Crea los datos de la reserva  //! Antes hay que pasarle la fk_cliente

const insertService = (fecha, hora_inicio, fk_cliente, pax, notas) => {
    return new Promise((resolve, reject) => {
        db.query('insert into restaurante.reservas (fecha, hora_inicio, fk_cliente, pax, notas) values (?,?, ?, ?, ?)', [fecha, hora_inicio, fk_cliente, pax, notas], (error, result) => {
            if (error) reject(error);
            resolve(result);
        });
    });
};


//Crea el número de mesa 

const insertTable = (numero) => {
    return new Promise((resolve, reject) => {
        db.query('insert into restaurante.mesas (numero) value (?)', [numero], (error, result) => {
            if (error) reject(error);
            resolve(result);
        });
    });
};


//DEVUELVE EL ÚLTIMO ID CREADO EN LA TABLA CLIENTES //! HAY QUE PASARLO JUSTO DESPUES DE INSERTCLIENT

const lastIdCreate = (pId) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT DISTINCT LAST_INSERT_ID() FROM clientes', [pId], (error, result) => {
            if (error) reject(error);
            resolve(result);
        })
    })
}


module.exports = {
    insertTable, insertService, buscarIdCliente, insertClient, lastIdCreate
}

