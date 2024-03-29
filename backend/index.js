require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");

app.use(cors({ origin: "*" }));

app.use(express.json());

app.use(routes);

const port = process.env.PORT || 3000;
app.listen(port);