//Factory function : funcion que crea otra función
const getAgePlugin = require('get-age')

//El patron adaptador me permite crear una función adaptable a varios casos diferentes
//Ejemplo : Que pasaría si en un futuro ya no se requiere de la librería get-age
            //ahora se usara una nueva, entonces para no estar cambiando en todos los 
            //lugares donde se usa esta librería, solo venimos aqui y la cambiamos
            //y esto em hará el cambio en todos los sitios.

const getAge = (birthdate) => {
    if ( !birthdate ) return new Error('birthdate is required')

    return getAgePlugin(birthdate)
}

module.exports = {
    getAge
}