const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, resp) => {

    return resp.send(`
        <h1>Mi primera web con NODEJS</h1><br>
        <hr>
        <p>${JSON.stringify(process.env)}</p>
    `);
});
app.get('/error', () => {
    throw new Error('Error no esperado');
});

app.listen(port, () => console.log('server is running on.... ', port));
