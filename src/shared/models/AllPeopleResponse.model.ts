import { IPeople } from 'swapi-ts';

export interface AllPeopleResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Array<IPeople>;
}
