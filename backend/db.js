const pg = require('pg')

const config = {
    host: 'postgresql',
    database: 'docker_fullstack_app',
    user: 'postgres',
    password: '1234',
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 1000, // how long a client 
    port: 5432,
}

module.exports = new pg.Pool(config)