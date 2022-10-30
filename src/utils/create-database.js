const mysql = require('mysql2/promise');

const path = require('path');

const args = process.argv.slice(2)[0];

const envFile = args === 'test' ? '../../.env.test' : '../../.env';

require('dotenv').config({
  path: path.join(__dirname, envFile),
});

const { DB_PASSWORD, DB_NAME, DB_USER, DB_HOST, DB_PORT } = process.env;

const setUpDatabase = async () => {
  try {

    const db = await mysql.createConnection({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      port: DB_PORT,
    });
    await db.query(` CREATE DATABASE IF NOT EXISTS ${DB_NAME}`);
    await db.query(`USE ${DB_NAME}`)

    await db.query(`CREATE TABLE IF NOT EXISTS Client (
        id INT PRIMARY KEY auto_increment,
        username VARCHAR(255),
        password VARCHAR(255),
        date VARCHAR(255),
        goal INTEGER(5),
        amWeight INTEGER(5),
        pmWeight INTEGER(5)
         )`)
    db.end();

  } catch (err) {
    console.log(
      `Your environment variables might be wrong. Please double check .env file`
    );
    console.log('Environment Variables are:', {
      DB_PASSWORD,
      DB_NAME,
      DB_USER,
      DB_HOST,
      DB_PORT,
    });
    console.log(err);
  }
};

setUpDatabase();