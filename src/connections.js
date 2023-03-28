const knex = require('knex')({
    client: 'pg',
    connection: {
    host: "ec2-34-193-110-25.compute-1.amazonaws.com",
    port: 5432,
    user: "zoixghfjcnfqaw",
    password:
      "22ff00cf7c89047c44f695d94fa0063ee99f94a13ca0ab7b0bd34392e5507803",
    database: "ddgck2pq4l8577",
    ssl: { rejectUnauthorized: false },
    }
});

module.exports = knex;
