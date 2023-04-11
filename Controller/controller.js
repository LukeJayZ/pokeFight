const pokedex = require('../pokedex.json');

exports.getPokemon = (req, res) => {
    res.json(pokedex)
}

