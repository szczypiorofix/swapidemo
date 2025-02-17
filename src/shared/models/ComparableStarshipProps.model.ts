import { IStarship } from 'swapi-ts';

export type ComparableStarshipProps = Pick<
    IStarship,
    'crew' | 'length' | 'passengers'
>;
