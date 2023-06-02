const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, resp) => {

    return resp.send(`
        ${JSON.stringify(process.env)}
    `);
});

app.listen(port, () => console.log('server is running on.... ', port));
