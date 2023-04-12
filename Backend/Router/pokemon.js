const express = require("express");
const router = express.Router();
const pokemonController = require("../Controller/controller");

router.get("/", pokemonController.getPokemon);
router.get("/:id", pokemonController.getPokemonById);
router.get("/:id/:info",pokemonController.getDeepInfo);

module.exports = router;
