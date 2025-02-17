import { getSelectedResourceBaseUrl } from './GetSelectedResourceBaseUrl.ts';
import { ENTITY_TYPE } from '../enums';
import { IPeople, IStarship } from 'swapi-ts';
import { getSelectedResourceBaseUrlWithId } from './GetSelectedResourceBaseUrlWithId.ts';
import { getRandomPositiveNumber } from './GetRandomPositiveNumber.ts';
import { AllPeopleResponse, AllStarshipsResponse } from '../models';

/**
 * Send two request for AllPeopleResponse and AllStarshipsResponse data type/ (oly first page).
 * Mainly for getting max results.
 */
export async function sendPairOfRequestsAll(): Promise<
    [AllPeopleResponse, AllStarshipsResponse]
> {
    const responseTypeT: Response = await fetch(
        getSelectedResourceBaseUrl(ENTITY_TYPE.PEOPLE)
    );
    const dataTypeT: AllPeopleResponse = await responseTypeT.json();
    const responseTypeV: Response = await fetch(
        getSelectedResourceBaseUrl(ENTITY_TYPE.STARSHIPS)
    );
    const dataTypeV: AllStarshipsResponse = await responseTypeV.json();
    return [dataTypeT, dataTypeV];
}

/**
 * Send two request for IPeople resource type.
 * @param max number: max number of available resources (for generating random number, below this value and greater than 0)
 * @return Promise<IPeople[]>: returns Promise with two resources of type IPeople
 */
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
                getSelectedResourceBaseUrlWithId(ENTITY_TYPE.PEOPLE, randomId)
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

/**
 * Send two request for IStarship resource type.
 * @param max number: max number of available resources (for generating random number, below this value and greater than 0)
 * @return Promise<IStarship[]>: returns Promise with two resources of type IStarship
 */
export async function sendPairOfRequestsForStarships(
    max: number
): Promise<IStarship[]> {
    const starships: IStarship[] = [];

    while (starships.length < 2) {
        const randomId = getRandomPositiveNumber(max);
        try {
            const response: Response = await fetch(
                getSelectedResourceBaseUrlWithId(
                    ENTITY_TYPE.STARSHIPS,
                    randomId
                )
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
