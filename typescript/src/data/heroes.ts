export interface Hero{
    id: number;
    name:string;
    owner:string;
}

export const heroes : Hero[] = [
    {
        id:1,
        name: 'Iroman',
        owner: 'Marvel'
    },
    {
        id:2,
        name: 'Superman',
        owner: 'Marvel'
    },
    {
        id:3,
        name: 'Spiderman',
        owner: 'Marvel'
    },

]
