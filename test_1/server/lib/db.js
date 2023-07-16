const mysql = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool
({
  host: 'localhost',
  user: 'root',
  database: 'test',
  password: '1234',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const getSongs = async ()=>
{
    const promisePool = pool.promise();
    const [rows] = await promisePool.query('select * from song;');
    console.log(rows);
    return rows;
};

module.exports = 
{
    getSongs
};