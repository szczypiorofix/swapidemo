import { ENTITY_TYPE } from '../enums';
import { peopleBaseUrl, starshipBaseUrl } from '../constants';

/**
 * Returns base url for selected resource type
 * @param selectedResource ENTITY_TYPE: resource type (People or Starship)
 * @return string: url string or empty string
 */
export function getSelectedResourceBaseUrl(
    selectedResource: ENTITY_TYPE
): string {
    switch (selectedResource) {
        case ENTITY_TYPE.PEOPLE:
            return peopleBaseUrl;
        case ENTITY_TYPE.STARSHIPS:
            return starshipBaseUrl;
        default:
            return '';
    }
}
