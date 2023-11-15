//function factory
/*const {buildMakePerson} = require('./js-foundation/02-factory');
const { getAge, getUuId } = require('./plugins')


const makePerson = buildMakePerson({getUuId,getAge})

const obj = {name: 'Wilson', birthdate:'1990-10-18'};

const wilson = makePerson(obj);
console.log(wilson)*/

import { buildLogger } from "./plugins/patron-adapter";


//promesas

//const  getPokemonById  = require('./js-foundation/03-prmesas')
/*const  getPokemonById  = require('./js-foundation/04-promesas_cadena')

getPokemonById(2).then((name) => console.log(name))
.catch((err)=> console.log('Por favor intente de nuevo'))
.finally(()=>console.log('Finalmente'))*/

//Asycn await usando axios
// const  getPokemonById  = require('./js-foundation/05-async-await')
// getPokemonById(2).then(function (response) {
//     console.log(response.name);
//   })

//-----------Winston para loggers  -----------------------
//app.js es el archivo a donde mandando a llamr
const logger = buildLogger('app.js');
//Al llamar a log de la librería me crea 2 archivos
logger.log('Hola mundo');

logger.error('Esto es algo malo'); 