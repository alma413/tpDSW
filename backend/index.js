const express = require('express');
const app = express();
const puerto = 3000;

// Esta es nuestra primera ruta (Endpoint)
app.get('/', (req, res) => {
    res.send('¡Hola! El backend de Arcadia está funcionando a la perfección.');
});

// Le decimos al servidor que se quede "escuchando"
app.listen(puerto, () => {
    console.log(`Servidor de Arcadia corriendo en http://localhost:${puerto}`);
});