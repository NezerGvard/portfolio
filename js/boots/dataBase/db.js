const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: '192939',
    host: "localhost",
    port: 5433,
    database: "postgres_node"
})

module.exports = pool
