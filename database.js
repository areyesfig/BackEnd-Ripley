const low = require('lowdb')
const FileASync = require('lowdb/adapters/FileAsync');

let db;

async function createConnection() {
    const adapter = new FileASync('db.json');
    db = await new low(adapter);
    db.defaults(
        {
            usuarios: [
              {
                "rut": "12.222.222-2",
                "nombre": "Juan Reyes",
                "cuenta": "22222",
                "saldo": 200000
              },
              {
                "rut": "18.888.888-8",
                "nombre": "Fernando Alonso",
                "cuenta": "11111",
                "saldo": 150000
              }
            ]
          }
    ).write();

    

}

const getConnection = () => {
    return db
};

module.exports = {
    createConnection,
    getConnection
}
