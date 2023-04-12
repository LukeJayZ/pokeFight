const pokedex = require("../pokedex.json");

const getPokemon = (req, res) => {
  res.json(pokedex);
};

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
