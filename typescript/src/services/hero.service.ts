import {Hero, heroes} from '../data/heroes';

export const getHeroById = (id:number)    =>{
    return heroes.find((hero: Hero)  => hero.id === id ) ;
}