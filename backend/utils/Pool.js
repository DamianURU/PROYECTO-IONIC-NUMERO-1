const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'user_1',
  password: 'Damian',
  port: 5432,
}) 

export default pool