const express = require('express');
const validateBodyRiquire = require('./middlewares/validateBodyRiquire');
const schemaUser = require('./validation/schemaUser');

const {
    registerUsers,
    getDate
} = require('./controllers/users');

const routes = express();

routes.post('/cadastro', validateBodyRiquire(schemaUser), registerUsers);
routes.get('/User/:username', getDate);

module.exports = routes;
