
//RECUPERA idCliente pasando nombre y telefono
const buscarIdCliente = (pClienteNombre, pClienteTelefono) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT clientes.id FROM restaurante.clientes WHERE clientes.nombre = ? AND clientes.telefono = ?', [pClienteNombre, pClienteTelefono], (error, result) => {
            if (error) reject(error);
            resolve(result);
        });
    });
};



// INSERTA los datos de un cliente 
const insertClient = (nombre, apellidos, telefono, email) => {
    return new Promise((resolve, reject) => {
        db.query('insert into restaurante.clientes (nombre, apellidos, telefono, email ) values (?, ?, ?, ? )', [nombre, apellidos, telefono, email], (error, result) => {
            if (error) reject(error);
            resolve(result);
        }
        )
    });
}


// INSERTA los datos de una reserva
const insertReserva = ( fecha, hora, idCliente, pax, notas ) => {
    return new Promise( (resolve, reject) => {
        db.query('INSERT INTO reservas (fecha, hora_inicio, fk_cliente, pax, notas) VALUES ( ?, ?, ?, ?, ? )', [ fecha, hora, idCliente, pax, notas ], (error, result) => {
            if(error) reject(error);
            resolve(result);
            console.log(result);
        });
    });
};


// RECUPERA idMesa por numero de mesa
const getIdMesaByNumero = ( numeroMesa ) => {
    return new Promise( (resolve, reject) =>{
        db.query('SELECT mesas.id FROM mesas WHERE mesas.numero = ?', [numeroMesa], (error, result) => {
            if(error) reject(error);
            resolve(result);
            console.log(result);
        });
    });
};


// INSERTA en tbi-reservas-mesas idReserva, idMesa
const insertMesasEnReserva = ( idReserva, idMesa ) => {
    return new Promise( (resolve, reject) => {
        db.query('INSERT INTO tbi_reservas_mesas ( fk_reservas, fk_mesas ) VALUES ( ?, ? )', [ idReserva, idMesa ], (error, result) => {
            if(error) reject(error);
            resolve(result);
        })
    })
}


// RECUPERA los numeros de mesa que tienen reserva en una fecha y hora
const getMesasOcupadasByFechaHora = ( pFecha, pHora ) => {
    return new Promise( (resolve, reject) => {
        db.query('SELECT mesas.numero FROM restaurante.mesas INNER JOIN restaurante.tbi_reservas_mesas ON mesas.id = tbi_reservas_mesas.fk_mesas INNER JOIN restaurante.reservas ON reservas.id = tbi_reservas_mesas.fk_reservas WHERE reservas.fecha = ? AND reservas.hora_inicio = ?', [ pFecha, pHora ], (error, result) => {
            if(error) reject(error);
            resolve(result);
        });
    });
};

module.exports = {
    buscarIdCliente, insertClient, insertReserva, getIdMesaByNumero, insertMesasEnReserva, getMesasOcupadasByFechaHora
}

