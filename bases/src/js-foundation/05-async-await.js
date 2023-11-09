// const getPokemonById = async (id) =>{

//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//     const resp = await fetch(url)
//     const pokemon = await resp.json()
//     return pokemon.name;

// }

//Aync awit con patron adapter
const {http} = require('../plugins/patron-adapter/http-client.plugin')

const getPokemonById = async (id) =>{

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await http.get(url)
    console.log(pokemon.data.name)
    return pokemon
}

module.exports = getPokemonById;