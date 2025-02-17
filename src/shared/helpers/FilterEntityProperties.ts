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

/**
 * Generate new object with filtered properties
 * @param entity ComparablePeopleProps | ComparableStarshipProps: IPeople | IStarship but with properties to compare and display
 * @param properties string[]: Array of property names for filter
 * @return T object
 */
export function filterEntityPropertiesReducer<T>(
    entity: ComparablePeopleProps | ComparableStarshipProps,
    properties: string[]
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

/**
 * Filter Entity object and returns new object with properties declared to display for People or Starships.
 * If Entity is null, returns null;
 * @param entity IStarship | IPeople | null: Entity for filtering properties
 * @return ComparablePeopleProps | ComparableStarshipProps | null: object with filtered properties or null
 */
export function filterEntityProperties(
    entity: PeopleOrStarshipOrNull
): ComparablePeopleProps | ComparableStarshipProps | null {
    if (!entity) {
        return null;
    }
    // filtering IPeople object
    if ('mass' in entity) {
        return filterEntityPropertiesReducer<ComparablePeopleProps>(
            entity,
            Object.keys(entity).filter((entityKey) =>
                propertiesOfPeopleToCompare.includes(entityKey as keyof IPeople)
            )
        );
    }

    // filtering IStarship object
    return filterEntityPropertiesReducer<ComparableStarshipProps>(
        entity,
        Object.keys(entity).filter((entityKey) =>
            propertiesOfStarshipsToCompare.includes(
                entityKey as keyof IStarship
            )
        )
    );
}
