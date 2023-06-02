const express = require('express');
const server = express();
const port = process.env.PORT || 3000;

server.get('/', (req, resp) => {
    console.log(req);

    return resp.send(`
        Nuevos cambios!<br>
        Mi puerto es: ${port} <br>
        Mis variables de entorno: ${JSON.stringify(process.env)}
    `);
});
server.get('/error', (req, resp) => {
    throw new Error('error de prueba');
    
})

server.listen(port, () => console.log('server is running on.... ', port));
