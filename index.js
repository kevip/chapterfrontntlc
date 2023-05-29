const express = require('express');
const server = express();
const port = process.env.PORT || 3000;

server.get('/', (req, resp) => resp.send('Hola mundo'))

server.listen(port, () => console.log('server is running on.... ', port));
