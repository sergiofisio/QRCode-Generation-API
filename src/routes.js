const express = require('express');
const validateBodyRiquire = require('./middlewares/validateBodyRiquire');
const schemaUser = require('./validation/schemaUser');

const {
    registerUsers,
    getDate
} = require('./controllers/Users');

const routes = express();

routes.get('/', async (req,res) =>{
    try{
        return res.json('API rodando')
    } catch (error){
        console.log(error)
    return res.statur(error.message)
    }

})

routes.post('/cadastro', validateBodyRiquire(schemaUser), registerUsers);
routes.get('/User/:username', getDate);

module.exports = routes;
