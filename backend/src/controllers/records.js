const knex = require("../../connection");

const showRecords = async (req, res) => {
    const { difficult } = req.query;

    try {
        const records = await knex("players")
            .where({ difficult })
            .select("*")
            .orderBy("records", "asc");

        if (records.length < 1) {
            return res.json([]);

        }

        res.status(200).json(records);

    } catch (error) {
        res.status(500).json(error.message);
    }
}


const addNewRecord = async (req, res) => {

    const {
        player,
        record,
        difficult
    } = req.body;

    try {

        const records = await knex("players")
            .where({ difficult })
            .select("*")
            .orderBy("records", "asc");

        if (records.length < 15) {
            const newRecord = await knex("players")
                .insert({ player, record, difficult })
                .returning("*");

            return res.status(201).json(newRecord[0]);
        }

        if (records.length === 15) {

            const newRecordCompare = records.some(item => item.record > record);

            if (newRecordCompare) {
                const newRecord = await knex("players")
                    .update({ player, record, difficult })
                    .where({ id: records[14].id })
                    .returning("*");

                return res.status(201).json(newRecord[0]);
            }
        }


    } catch (error) {
        res.status(500).json({ message: `${error.message}` });
    }

}

module.exports = {
    showRecords,
    addNewRecord,
};