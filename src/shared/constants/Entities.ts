import { IPeople, IStarship } from 'swapi-ts';

export const propertiesOfPeopleToCompare: Array<keyof IPeople> = [
    'mass',
    'height',
];

export const propertiesOfStarshipsToCompare: Array<keyof IStarship> = [
    'crew',
    'passengers',
    'length',
];

export const peopleFirstProperty: keyof IPeople =
    propertiesOfPeopleToCompare[0];

export const starshipFirstProperty: keyof IStarship =
    propertiesOfStarshipsToCompare[0];
