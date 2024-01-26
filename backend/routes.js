const express = require("express");
const { showRecords } = require("./src/controllers/records");
const routes = express();

routes.get("/records", showRecords);

module.exports = routes;