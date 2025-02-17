import { IPeople } from 'swapi-ts';

export type ComparablePeopleProps = Pick<IPeople, 'mass' | 'height'>;
