import { ENTITY_TYPE } from '../enums';
import { peopleBaseUrl, starshipBaseUrl } from '../constants';

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
