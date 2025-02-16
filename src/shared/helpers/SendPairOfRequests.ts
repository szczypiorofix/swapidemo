import { getSelectedResourceBaseUrl } from './GetSelectedResourceBaseUrl.ts';
import { ENTITY_TYPE } from '../enums';
import { IPeople, IStarship } from 'swapi-ts';
import { getSelectedResourceWithId } from './GetSelectedResourceWithId.ts';
import { getRandomPositiveNumber } from './GetRandomPositiveNumber.ts';

export async function sendPairOfRequestsAll<T, V>(): Promise<[T, V]> {
    const response1: Response = await fetch(
        getSelectedResourceBaseUrl(ENTITY_TYPE.PEOPLE)
    );
    const data1: T = await response1.json();
    const response2: Response = await fetch(
        getSelectedResourceBaseUrl(ENTITY_TYPE.STARSHIPS)
    );
    const data2: V = await response2.json();
    return [data1, data2];
}

export async function sendPairOfRequestsForPeople(
    max: number
): Promise<IPeople[]> {
    const people: IPeople[] = [];
    let lastId: number = 0;

    while (people.length < 2) {
        const randomId = getRandomPositiveNumber(max);
        if (randomId === lastId) {
            console.warn(`Generated the same id (${lastId}) twice!`);
            continue;
        }
        try {
            const response: Response = await fetch(
                getSelectedResourceWithId(ENTITY_TYPE.PEOPLE, randomId)
            );

            lastId = randomId;

            if (!response.ok) {
                if (response.status === 404) {
                    console.error(`Did not found people with id=${randomId}:`);
                    continue;
                }
                throw new Error(`Response error ${response.status}`);
            }
            const person: IPeople = await response.json();
            people.push(person);
        } catch (error) {
            console.error(`Cannot retrieve people with id=${randomId}:`, error);
        }
    }

    return people;
}

export async function sendPairOfRequestsForStarships(
    max: number
): Promise<IStarship[]> {
    const starships: IStarship[] = [];

    while (starships.length < 2) {
        const randomId = getRandomPositiveNumber(max);
        try {
            const response: Response = await fetch(
                getSelectedResourceWithId(ENTITY_TYPE.STARSHIPS, randomId)
            );
            if (!response.ok) {
                if (response.status === 404) {
                    console.error(
                        `Did not found starship with id=${randomId}:`
                    );
                    continue;
                }
                throw new Error(`Response error ${response.status}`);
            }
            const starship: IStarship = await response.json();
            starships.push(starship);
        } catch (error) {
            console.error(
                `Cannot retrieve starship with id=${randomId}:`,
                error
            );
        }
    }

    return starships;
}
