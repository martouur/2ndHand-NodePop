"use strict";

const mongoose = require('mongoose');
const { db } = require('../config/config');
const conn = mongoose.connection;

mongoose.Promise = global.Promise;

conn.on( 'error', err => {
    console.log('Error de conexión a la BBDD', err);
    process.exit(1);
});

conn.once('open', () => {
    console.log('Se ha conectado a la BBDD');
});

let server_string_connection;

if (db.db_auth == 'db_without_auth') {
    server_string_connection = db.db_without_auth.server_string_connection;
} else if (db.db_auth == 'db_with_auth') {
    server_string_connection = db.db_with_auth.server_string_connection;
} else {
    console.log('Elige un tipo de validación para conectar a la BBDD');
    exit (1);
}

mongoose.connect(server_string_connection);

module.exports = conn
