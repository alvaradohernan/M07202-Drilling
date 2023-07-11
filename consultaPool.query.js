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

const textUno = "SELECT * from estudiantes where edad > 25";
const textDos = "SELECT * FROM estudiantes ORDER BY apellidos desc";
const textTres = "SELECT * FROM cursos";

// Consultas:
// 1. Seleccione todos los estudiantes que sean mayores de 25 años.
// callback

pool.query(textUno, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }
});

// 2. Seleccione todos los estudiantes, y ordene el resultado reflejando el apellido en forma descendente.
// callback

pool.query(textDos, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }
});

// 3. Seleccione todos los cursos disponibles.
// callback

pool.query(textTres, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }
});
