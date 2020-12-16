
//COMPROBAR SI EL CLIENTE EXISTE 
const buscarIdCliente = (pClienteNombre, pClienteApellido, pClienteTelefono) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT clientes.idclientes FROM restaurante.clientes   WHERE clientes.nombre = ? AND clientes.apellidos= ? AND clientes.telefono = ?', [pClienteNombre, pClienteApellido, pClienteTelefono], (error, result) => {
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

//Crea los datos de la reserva //! Antes hay que pasarle las fk

const insertService = (fecha, pax, notas, fk_clientes, fk_servicios, fk_mesas) => {
    return new Promise((resolve, reject) => {
        db.query('insert into restaurante.reservas (fecha, notas, pax, fk_clientes, fk_servicios, fk_mesas) values (?, ?, ?, ?, ?, ?);', [fecha, notas, pax, fk_clientes, fk_servicios, fk_mesas], (error, result) => {
            if (error) reject(error);
            resolve(result);
        });
    });
};


//Crea el número de mesa //! OK

const insertTable = (numero) => {
    return new Promise((resolve, reject) => {
        db.query('insert into restaurante.mesas (numero) value (?)', [numero], (error, result) => {
            if (error) reject(error);
            resolve(result);
        });
    });
};

//Crea la hora de la reserva //!OK 

const insertHora = (hora_inicio) => {
    return new Promise((resolve, reject) => {
        db.query('insert into restaurante.servicios (hora_inicio) value (?)'[hora_inicio], (error, result) => {
            if (error) reject(error);
            resolve(result);
        })
    })
}

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
    insertTable, insertService, buscarIdCliente, insertClient, insertHora, lastIdCreate
}

