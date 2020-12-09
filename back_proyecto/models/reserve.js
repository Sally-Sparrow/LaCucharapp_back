
// Crea los datos del cliente 
const resClient = (nombre, apellidos, telefono, email) => {
    return new Promise((resolve, reject) => {
        db.query(
            'insert into restaurante.clientes (nombre, apellidos, email, telefono) values (?, ?, ?, ? )',
            [nombre, apellidos, email, telefono],
            (error, result) => {
                if (error) reject(error);
                resolve(result);
            }
        )
    });
}

//Crea los datos del servicio 

const resService = (fecha, hora_inicio, pax, notas) => {
    return new Promise((resolve, reject) => {
        db.query('insert into restaurante.servicios (fecha, hora_inicio, pax, notas) values (?, ?, ?, ?)',
            [fecha, hora_inicio, pax, notas], (error, result) => {
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









module.exports = {
    resClient, resTable, resService
}

