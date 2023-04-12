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
const getDeepInfo = (req, res) => {
  const id = parseInt(req.params.id);
  const pokemon = pokedex.find((p) => p.id === id);
  const infoType = req.params.info;
  if (!pokemon) {
    return res.status(404).send(`Pokemon with ID ${id} not found.`);
  }
  let infoValue;
  switch (infoType) {
    case "name":
      infoValue = pokemon.name;
      break;
    case "type":
      infoValue = pokemon.type;
      break;
    case "base":
      infoValue = pokemon.base;
      break;
    default:
      return res.status(400).send(`Invalid info parameter: ${infoType}`);
  }

  res.send(infoValue);
};

module.exports = { getPokemon, getPokemonById, getDeepInfo };
