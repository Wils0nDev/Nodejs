// const getPokemonById = async (id) =>{

//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//     const resp = await fetch(url)
//     const pokemon = await resp.json()
//     return pokemon.name;

// }

//Aync awit con patron adapter
import  {httpClientPlugin as http}  from '../plugins/patron-adapter/http-client.plugin'

export const getPokemonById = async (id:number) =>{

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await http.get(url)
    console.log(pokemon.data.name)
    return pokemon
}

