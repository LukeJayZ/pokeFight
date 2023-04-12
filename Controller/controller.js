const pokedex = require('../pokedex.json');

exports.getPokemon = (req, res) => {
    res.json(pokedex)
}

exports.getPokemonById = (req, res) =>{
    const id = parseInt(req.params.id);
    const pokemon = pokedex.pokemon.find(p => p.id === id);
    res.json(pokemon);
};