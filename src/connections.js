const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'https://qr-code-generation-ot5kck2bb-novaisbrunoo.vercel.app',
        port: 5432,
        user: 'postgres',
        password: '123456',
        database: 'users_registers',
        ssl: { rejectUnauthorized: false },
    }
});

module.exports = knex;
