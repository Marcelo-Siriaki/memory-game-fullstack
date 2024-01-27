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

        res.status(200).json(records);

    } catch (error) {
        res.status(500).json(error.message);
    }
}


const addNewRecord = async (req, res) => {

    const {
        player,
        record,
        difficult,
        showAll
    } = req.body;

    try {

        const records = await knex("players")
            .where({ difficult })
            .select("*")
            .orderBy("record", "asc");

        if (records.length < 15) {
            const newRecord = await knex("players")
                .insert({ player, record, difficult, showall: showAll })
                .returning("*");

            return res.status(201).json(newRecord[0]);
        }

        if (records.length === 15) {

            const newRecordCompare = records.some(item => item.record > Number(record));

            if (newRecordCompare) {
                const newRecord = await knex("players")
                    .update({ player, record, difficult, showall: showAll })
                    .where({ id: records[14].id })
                    .returning("*");

                return res.status(201).json(newRecord[0]);
            }
        }

    } catch (error) {
        res.status(500).json(error.message);
    }

}

module.exports = {
    showRecords,
    addNewRecord,
};