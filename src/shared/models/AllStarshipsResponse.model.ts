import { IStarship } from 'swapi-ts';

export interface AllStarshipsResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Array<IStarship>;
}
