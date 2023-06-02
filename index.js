const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, resp) => {

    return resp.send(`
        <h1>Mi primera web con NODEJS</h1><br>
        ${process.env}
    `);
});

app.listen(port, () => console.log('server is running on.... ', port));
