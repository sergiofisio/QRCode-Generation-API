const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes);

app.listen(process.env.PORT, () => {
    console.log(`servidor na porta ${process.env.PORT}`)
});
