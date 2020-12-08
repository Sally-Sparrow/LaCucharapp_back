const getMesasByEspacio = ( pEspacio ) => {
    return new Promise( (resolve, reject) => {
        db.query( 'SELECT mesas.numero FROM restaurante.mesas WHERE mesas.salon = ?', [pEspacio], (error, rows) =>{
            if(error) reject(error);
            resolve(rows);
        });
    });
}

module.exports = {
    getMesasByEspacio
}