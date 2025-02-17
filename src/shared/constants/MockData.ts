import { IPeople, IStarship } from 'swapi-ts';
import { ComparablePeopleProps, ComparableStarshipProps } from '../models';

export const peopleEntity1: IPeople = {
    name: 'Anakin Skywalker',
    height: '188',
    mass: '84',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '41.9BBY',
    gender: 'male',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: [
        'https://swapi.dev/api/films/4/',
        'https://swapi.dev/api/films/5/',
        'https://swapi.dev/api/films/6/',
    ],
    species: [],
    vehicles: [
        'https://swapi.dev/api/vehicles/44/',
        'https://swapi.dev/api/vehicles/46/',
    ],
    starships: [
        'https://swapi.dev/api/starships/39/',
        'https://swapi.dev/api/starships/59/',
        'https://swapi.dev/api/starships/65/',
    ],
    created: new Date('2014-12-10T16:20:44.310000Z'),
    edited: new Date('2014-12-20T21:17:50.327000Z'),
    url: 'https://swapi.dev/api/people/11/',
};

export const peopleEntity2: IPeople = {
    name: 'Obi-Wan Kenobi',
    height: '182',
    mass: '77',
    hair_color: 'auburn, white',
    skin_color: 'fair',
    eye_color: 'blue-gray',
    birth_year: '57BBY',
    gender: 'male',
    homeworld: 'https://swapi.dev/api/planets/20/',
    films: [
        'https://swapi.dev/api/films/1/',
        'https://swapi.dev/api/films/2/',
        'https://swapi.dev/api/films/3/',
        'https://swapi.dev/api/films/4/',
        'https://swapi.dev/api/films/5/',
        'https://swapi.dev/api/films/6/',
    ],
    species: [],
    vehicles: ['https://swapi.dev/api/vehicles/38/'],
    starships: [
        'https://swapi.dev/api/starships/48/',
        'https://swapi.dev/api/starships/59/',
        'https://swapi.dev/api/starships/64/',
        'https://swapi.dev/api/starships/65/',
        'https://swapi.dev/api/starships/74/',
    ],
    created: new Date('2014-12-10T16:16:29.192000Z'),
    edited: new Date('2014-12-20T21:17:50.325000Z'),
    url: 'https://swapi.dev/api/people/10/',
};

export const starshipEntity1: IStarship = {
    name: 'Millennium Falcon',
    model: 'YT-1300 light freighter',
    manufacturer: 'Corellian Engineering Corporation',
    cost_in_credits: '100000',
    length: '34.37',
    max_atmosphering_speed: '1050',
    crew: '4',
    passengers: '6',
    cargo_capacity: '100000',
    consumables: '2 months',
    hyperdrive_rating: '0.5',
    MGLT: '75',
    starship_class: 'Light freighter',
    pilots: [
        'https://swapi.dev/api/people/13/',
        'https://swapi.dev/api/people/14/',
        'https://swapi.dev/api/people/25/',
        'https://swapi.dev/api/people/31/',
    ],
    films: [
        'https://swapi.dev/api/films/1/',
        'https://swapi.dev/api/films/2/',
        'https://swapi.dev/api/films/3/',
    ],
    created: new Date('2014-12-10T16:59:45.094000Z'),
    edited: new Date('2014-12-20T21:23:49.880000Z'),
    url: 'https://swapi.dev/api/starships/10/',
};

export const starshipEntity2: IStarship = {
    name: 'X-wing',
    model: 'T-65 X-wing',
    manufacturer: 'Incom Corporation',
    cost_in_credits: '149999',
    length: '12.5',
    max_atmosphering_speed: '1050',
    crew: '1',
    passengers: '0',
    cargo_capacity: '110',
    consumables: '1 week',
    hyperdrive_rating: '1.0',
    MGLT: '100',
    starship_class: 'Starfighter',
    pilots: [
        'https://swapi.dev/api/people/1/',
        'https://swapi.dev/api/people/9/',
        'https://swapi.dev/api/people/18/',
        'https://swapi.dev/api/people/19/',
    ],
    films: [
        'https://swapi.dev/api/films/1/',
        'https://swapi.dev/api/films/2/',
        'https://swapi.dev/api/films/3/',
    ],
    created: new Date('2014-12-12T11:19:05.340000Z'),
    edited: new Date('2014-12-20T21:23:49.886000Z'),
    url: 'https://swapi.dev/api/starships/12/',
};

export const entityOfPeopleWithComparableProps1:
    | ComparablePeopleProps
    | ComparableStarshipProps = {
    mass: '12',
    height: '175',
};

export const entityOfPeopleWithComparableProps2:
    | ComparablePeopleProps
    | ComparableStarshipProps = {
    mass: '30',
    height: '165',
};

export const entityOfStarshipWithComparableProps1:
    | ComparablePeopleProps
    | ComparableStarshipProps = {
    crew: '12',
    passengers: '10',
    length: '30',
};

export const entityOfStarshipWithComparableProps2:
    | ComparablePeopleProps
    | ComparableStarshipProps = {
    crew: '30',
    passengers: '12',
    length: '10',
};
