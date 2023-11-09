//Factory function : funcion que crea otra función
//const { getAge, getUuId } = require('../plugins')

const buildMakePerson = ({getUuId, getAge }) => {
      return ({name, birthdate})=>{
        return {
            id : getUuId(),
            name ,
            birthdate,
            age :getAge(birthdate)
    
        }
    }
}



// const obj = {name: 'Wilson', birthdate:'1990-10-18'};
// const wilson = buildPerson(obj)
// console.log(wilson)

module.exports = {
    buildMakePerson
}