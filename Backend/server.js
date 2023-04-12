const express = require("express");
const app = express();
const router = require("./Router/pokemon");
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/pokemon", router);

module.exports = app;
