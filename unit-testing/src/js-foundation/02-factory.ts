//Factory function : funcion que crea otra función
//const { getAge, getUuId } = require('../plugins')

interface BuildMakerPersonOptions {
    getUUID: () => string;
    getAge: (birthdate:string) => number;
}

interface PersonOptions { 
    name : string;
    birthdate : string;
}

export const buildMakePerson = ({getUUID, getAge }:BuildMakerPersonOptions ) => {
      return ({name, birthdate}:PersonOptions)=>{
        return {
            id : getUUID(),
            name ,
            birthdate,
            age :getAge(birthdate)
    
        }
    }
}



// const obj = {name: 'Wilson', birthdate:'1990-10-18'};
// const wilson = buildPerson(obj)
// console.log(wilson)

