const pokemonController = require("../Controller/controller");

const { Router } = require("express");
const router = Router();

router.get("/", getPokemon);

module.exports = router;
