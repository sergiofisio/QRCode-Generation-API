const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes);

const port  process.enc.PORT || 6000

app.listen(port, () => {
    console.log(`servidor na porta ${port}`)
});
