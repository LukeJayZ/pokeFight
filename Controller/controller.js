const pokedex = require("../pokedex.json");

exports.getPokemon = (req, res) => {
  res.json(pokedex);
};

exports.getPokemonById = (req, res) => {
  const id = parseInt(req.params.id);
  const pokemon = pokedex.filter((p) => p.id === id);
  if (pokemon.length > 0) {
    res.json(pokemon);
  } else {
    console.log("Fehler");
  }
};
