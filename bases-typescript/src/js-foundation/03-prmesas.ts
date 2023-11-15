export const getPokemonById = (id,callback) =>{

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    fetch(url).then((response)=>{
        response.json().then(pokemon => {
            return callback(pokemon.name)
        })
        
    })

 return 'Pokemon'
}

