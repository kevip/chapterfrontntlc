const express = require('express');
const server = express();
const port = process.env.PORT || 3000;

server.get('/', (req, resp) => resp.send(`
    Nuevos cambios!<br>
    Mi puerto es: ${port} <br>
    Mis variables de entorno: ${JSON.stringify(process.env)}
`))

server.listen(port, () => console.log('server is running on.... ', port));
