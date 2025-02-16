import { getSelectedResourceBaseUrl } from './GetSelectedResourceBaseUrl.ts';
import { ENTITY_TYPE } from '../enums';

export function getSelectedResourceWithId(
    resourceType: ENTITY_TYPE,
    id: number
): string {
    return `${getSelectedResourceBaseUrl(resourceType)}${id}`;
}
