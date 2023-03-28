const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'ec2-3-217-146-37.compute-1.amazonaws.com',
        port: 5432,
        user: 'iacicoejtknnfu',
        password: 'e0daab510f67b07a247554db5a1dad51f657875b834ea27ae17f9a314688b176',
        database: 'da0khbs774ujde',
        ssl: { rejectUnauthorized: false },
    }
});

module.exports = knex;
