import { buildMakePerson } from "../src/js-foundation/02-factory";

const getUUID = () => '1234'
const getAge = () => 35;

describe('js-foundation/02-factory.ts', () => { 
    test('buildMakePerson should return a function ', () => {
        const makePerson = buildMakePerson({getUUID,getAge})
        expect(typeof makePerson).toBe('function')

    });

    test('makePerson should return a person data ', () => {

        const makePerson =  buildMakePerson({getUUID,getAge});
        const johnDoe = makePerson({name:'John Doe', birthdate: '1990-10-18'})

        expect(johnDoe).toEqual(
            {id:'1234', 
            name:'John Doe', 
            birthdate: '1990-10-18', 
            age:35
        }
        )
        
    });
 })