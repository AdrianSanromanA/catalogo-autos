const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const autos = [
  { marca: "Nissan", modelo: "Versa", anio: 2023, precio: 320000, color: "Blanco" },
  { marca: "Chevrolet", modelo: "Aveo", anio: 2022, precio: 250000, color: "Rojo" },
  { marca: "Volkswagen", modelo: "Jetta", anio: 2024, precio: 430000, color: "Gris" },
  { marca: "Mazda", modelo: "Mazda 3", anio: 2023, precio: 410000, color: "Azul" }
];

app.get('/', (req, res) => {
  res.send('Microservicio funcionando correctamente. Ve a /api/autos');
});

app.get('/api/autos', (req, res) => {
  res.json(autos);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});