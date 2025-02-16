import {
    ComparablePeopleProps,
    ComparableStarshipProps,
    PeopleOrStarshipOrNull,
} from '../models';
import {
    propertiesOfPeopleToCompare,
    propertiesOfStarshipsToCompare,
} from '../constants';
import { IPeople, IStarship } from 'swapi-ts';

export function filterEntityPropertiesReducer<T>(
    properties: string[],
    entity: ComparablePeopleProps | ComparableStarshipProps
): T {
    return properties.reduce((filteredObject, propertyKey) => {
        filteredObject[propertyKey as keyof typeof filteredObject] =
            entity[
                propertyKey as keyof (
                    | ComparablePeopleProps
                    | ComparableStarshipProps
                )
            ];
        return filteredObject;
    }, {} as T);
}

export function filterEntityProperties(
    entity: PeopleOrStarshipOrNull
): ComparablePeopleProps | ComparableStarshipProps | null {
    if (!entity) {
        return null;
    }
    // filtering IPeople
    if ('mass' in entity) {
        return filterEntityPropertiesReducer<ComparablePeopleProps>(
            Object.keys(entity).filter((entityKey) =>
                propertiesOfPeopleToCompare.includes(entityKey as keyof IPeople)
            ),
            entity
        );
    }

    // filtering IStarship
    return filterEntityPropertiesReducer<ComparableStarshipProps>(
        Object.keys(entity).filter((entityKey) =>
            propertiesOfStarshipsToCompare.includes(
                entityKey as keyof IStarship
            )
        ),
        entity
    );
}
