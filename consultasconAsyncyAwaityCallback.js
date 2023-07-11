// Módulo npm node-postgres
const { Pool } = require("pg");

// Datos para la conexión a la base de datos
const pool = new Pool({
  user: "node_user",
  host: "localhost",
  database: "practica_db",
  password: "1234",
  port: 5432,
});

const queryUno = "SELECT * from estudiantes where edad > 25";
const queryDos = "SELECT * FROM estudiantes ORDER BY apellidos desc";
const queryTres = "SELECT * FROM cursos";

// async y await
async function leerqueryUno() {
  try {
    const client = await pool.connect();
    const res = await pool.query(queryUno);
    for (let row of res.rows) {
      console.log(row);
    }
  } catch (err) {
    console.error(err);
  }
}

// callback
pool.query(queryUno, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }
});

// async y await
async function leerqueryDos() {
  try {
    const client = await pool.connect();
    const res = await pool.query(queryDos);
    for (let row of res.rows) {
      console.log(row);
    }
  } catch (err) {
    console.error(err);
  }
}

// callback
pool.query(queryDos, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }
});

// async y await
async function leerqueryTres() {
  try {
    const client = await pool.connect();
    const res = await pool.query(queryTres);
    for (let row of res.rows) {
      console.log(row);
    }
  } catch (err) {
    console.error(err);
  }
}

// callback
pool.query(queryTres, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }
});

leerqueryUno();
leerqueryDos();
leerqueryTres();
