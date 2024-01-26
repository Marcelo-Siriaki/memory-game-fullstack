const express = require("express");
const { showRecords, addNewRecord } = require("./src/controllers/records");
const routes = express();

routes.get("/records", showRecords);
routes.post("/new-record", addNewRecord);

module.exports = routes;