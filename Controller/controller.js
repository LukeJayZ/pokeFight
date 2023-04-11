const pokedex = require('./pokedex.json');

const getPokemon = (req, res) => {
    res.json(pokedex)
}

