import { IPeople, IStarship } from 'swapi-ts';

export type PeopleOrStarshipOrNull = IPeople | IStarship | null;

export type KeysOfEntities = keyof IPeople | keyof IStarship;
