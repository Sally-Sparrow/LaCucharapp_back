
const getAll = () => {
    return new Promise( (resolve, reject) =>{
        db.query( 'SELECT * FROM clientes', (error, rows) => {
            if(error) reject(error);
            resolve(rows);
        });
    });    
};

module.exports = { getAll };