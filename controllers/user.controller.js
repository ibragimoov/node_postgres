const db = require("../db");

class UserController {
    async createUser(req, res) {
        const { username, surname } = req.body;
        const newPerson = await db.query(
            "INSERT INTO person (username, surname) values($1, $2) RETURNING *",
            [username, surname]
        );
        res.json(newPerson.rows[0]);
    }
    async getUsers(req, res) {
        const users = await db.query("SELECT * FROM person");
        res.json(users.rows);
    }
    async getOneUser(req, res) {
        const { id } = req.params;
        const user = await db.query(`SELECT * FROM person WHERE id=${id}`);
        res.json(user.rows);
    }
    async deleteUser(req, res) {
        const { id } = req.body;
        const updatedUser = await db.query(
            `DELETE FROM person WHERE id = $1 RETURNING *`,
            [id]
        );
        res.json(updatedUser.rows);
    }
    async updateUser(req, res) {
        const { id, username, surname } = req.body;
        const updatedUser = await db.query(
            `UPDATE person set username = $1, surname = $2 WHERE id = $3`,
            [username, surname, id]
        );
        res.json(updatedUser.rows);
    }
}

module.exports = new UserController();
