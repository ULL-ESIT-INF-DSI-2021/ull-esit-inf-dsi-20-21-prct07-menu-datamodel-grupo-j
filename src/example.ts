const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');

const adapter = new FileAsync('data.ts');

// Variable global
let db;

// Donde se guardan los archivo de la base de datos
function createConnection(){
    db.read()
    db.defaults()  //definimos diferentes arreglos por defector
}