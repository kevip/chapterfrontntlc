const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, resp) => {

    return resp.send(`
        Mi primera web con NODEJS
    `);
});

app.listen(port, () => console.log('server is running on.... ', port));
