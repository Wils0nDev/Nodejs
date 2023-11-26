import { getAge } from "../../src/plugins/patron-adapter";

describe('plugins/patron-adapter.ts', () => { 

    test('getAge() should return the age of a person', () => {

        //console.log({currentYear: new Date().getFullYear()});

        const birthdate = '1990-10-18';
        const age = getAge(birthdate)
        
        expect(age).toBe(33)
    });

    //SpyOn ->espía, esto nos permite modificar una propiedad de metodo nativo
    test('getAge should return 0 years ', () => {
        const spy = jest.spyOn(Date.prototype,'getFullYear').mockReturnValue(1990)
        const birthdate = '1990-10-18';
        const age = getAge(birthdate)
        expect(age).toBe(0)
        expect(spy).toHaveBeenCalledWith()
       // console.log({currentYear: new Date().getFullYear()});
        //console.log(age);


    });
 })