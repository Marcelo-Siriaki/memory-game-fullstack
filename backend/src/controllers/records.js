const knex = require("../../connection");

const showRecords = async (req, res) => {
    const { difficult } = req.query;

    try {
        const records = await knex("players")
            .where({ difficult })
            .select("*")
            .orderBy("record", "asc");

        if (records.length < 1) {
            return res.json([]);

        }

        res.json(records);

    } catch (error) {
        res.status(500).json({ message: `${error.message}` });
    }
}

module.exports = { showRecords };