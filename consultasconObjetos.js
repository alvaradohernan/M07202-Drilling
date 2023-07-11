const { Pool } = require("pg");

const pool = new Pool({
  user: "node_user",
  host: "localhost",
  database: "practica_db",
  password: "1234",
  port: 5432,
});

// Creamos los objetos
const query = {
  text: "SELECT * from estudiantes where edad > 25",
  rowMode: "array", // Definiendo modo fila
};
const queryDos = {
  text: "SELECT * FROM estudiantes ORDER BY apellidos desc",
  rowMode: "array", // Definiendo modo fila
};
const queryTres = {
  text: "SELECT * FROM cursos",
  rowMode: "array", // Definiendo modo fila
};

// Realizamos la consulta con el Objeto query
pool.query(query, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }
});

// Realizamos la consulta con el Objeto queryDos
pool.query(queryDos, (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res.rows);
    }
});

  // Realizamos la consulta con el Objeto queryTres
pool.query(queryTres, (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res.rows);
    }
});
  
