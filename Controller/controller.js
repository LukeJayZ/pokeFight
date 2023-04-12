const pokedex = require("../pokedex.json");

const getPokemon = (req, res) => {
  res.json(pokedex);
};

<<<<<<< HEAD
exports.getPokemonById = (req, res) =>{
    const id = parseInt(req.params.id);
    const pokemon = pokedex.pokemon.find(p => p.id === id);
    res.json(pokemon);
};
=======
const getPokemonById = (req, res) => {
  const id = parseInt(req.params.id);
  const pokemon = pokedex.filter((p) => p.id === id);
  if (pokemon.length > 0) {
    res.json(pokemon);
  } else {
    res.status(404).send(error.message);
  }
};

module.exports = {getPokemon, getPokemonById};
>>>>>>> 0b7086c5b4a56236eb5b2eaf847abe28683a539f
