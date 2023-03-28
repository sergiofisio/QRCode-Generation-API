const knex = require('../connections');

const registerUsers = async (req, res) => {
    const { name, linkedin, github } = req.body;
    console.log(name, linkedin, github)

    try {
        const newUser = await knex('users')
            .insert({
                name,
                linkedin,
                github
            })
            .returning('*');

        return res.status(200).json(newUser);
    } catch (error) {
        return res.status(500).json({ message: 'Erro interno do servidor' })
    }
};

const getDate = async (req, res) => {
    const { username } = req.params;
    console.log(username)
    try {
        const user = await knex('users').where('name', username).debug();

        return res.status(200).json(user[0]);
    } catch (error) {
        return res.status(500).json('Erro interno do servidor');
    }
};

module.exports = {
    registerUsers,
    getDate
};