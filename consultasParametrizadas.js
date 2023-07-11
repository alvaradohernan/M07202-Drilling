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

// Consultas:
// 1. Seleccione todos los estudiantes que sean mayores de 25 años.

const queryUno = "SELECT * from estudiantes where edad > 25";

// async/await
async function leerqueryUno() {
  try {
    let response = console.log(await pool.query(queryUno));
  } catch (err) {
    console.log(err);
  }
}
leerqueryUno();

// callback
pool.query(queryUno, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }
});

// promise
pool
  .query(queryUno)
  .then((res) => {
    console.log(res.rows);
  })
  .catch((e) => console.error(e.stack));

// 2. Seleccione todos los estudiantes, y ordene el resultado reflejando el apellido en forma descendente.
const queryDos = "SELECT * FROM estudiantes ORDER BY apellidos desc";

// async/await
async function leerqueryDos() {
  try {
    let response = console.log(await pool.query(queryDos));
  } catch (err) {
    console.log(err);
  }
}
leerqueryDos();

// callback
pool.query(queryDos, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }
});

// promise
pool
  .query(queryDos)
  .then((res) => {
    console.log(res.rows);
  })
  .catch((e) => console.error(e.stack));

// 3. Seleccione todos los cursos disponibles.
const queryTres = "SELECT * FROM cursos";

// async/await
async function leerqueryTres() {
  try {
    let response = console.log(await pool.query(queryTres));
  } catch (err) {
    console.log(err);
  }
}
leerqueryTres();

// callback
pool.query(queryTres, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }
});

// promise
pool
  .query(queryTres)
  .then((res) => {
    console.log(res.rows);
  })
  .catch((e) => console.error(e.stack));
