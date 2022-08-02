const express = require('express');
const app = express();

const port = 3030;
const mainRouter = require('./routes/main');

/* recursos estaticos */
app.use(express.static('public'));

/* rutas */
app.use('/', mainRouter);


app.listen(port, ()=>{
    console.log(`Servidor funcionando en http://localhost:${port}`);
    });
