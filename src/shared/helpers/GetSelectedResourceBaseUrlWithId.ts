import { getSelectedResourceBaseUrl } from './GetSelectedResourceBaseUrl.ts';
import { ENTITY_TYPE } from '../enums';

/**
 * Returns resource url for Starship or People resource with id given
 * @param resourceType ENTITY_TYPE: People or Starship type
 * @param id number: id number of resource
 */
export function getSelectedResourceBaseUrlWithId(
    resourceType: ENTITY_TYPE.PEOPLE | ENTITY_TYPE.STARSHIPS,
    id: number
): string {
    return `${getSelectedResourceBaseUrl(resourceType)}${id}`;
}
