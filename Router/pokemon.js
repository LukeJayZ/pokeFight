const express = require("express");
const router = express.Router();
const pokemonController = require("../Controller/controller");

router.get("/", pokemonController.getPokemon);

module.exports = router;
