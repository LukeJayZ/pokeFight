const express = require("express");
const router = express.Router();
const pokemonController = require("../Controller/controller");

router.get("/", pokemonController.getPokemon);
<<<<<<< HEAD
router
=======
router.get("/:id", pokemonController.getPokemonById);
>>>>>>> 0b7086c5b4a56236eb5b2eaf847abe28683a539f

module.exports = router;
