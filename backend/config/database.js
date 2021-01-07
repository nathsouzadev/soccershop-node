const database = require('mysql');
const connDb = function() {
    console.log('Connect to database');
    return (connection = database.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'soccershop'
    }));
}

module.exports = function() {
    return connDb;
}
