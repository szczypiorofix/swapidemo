import { ENTITY_TYPE } from '../shared/enums';
import { AppContextState } from '../shared/models';

export const defaultAppContext: AppContextState = {
    selectedEntity: ENTITY_TYPE.NONE,
    loadedEntity: ENTITY_TYPE.NONE,
    selectedProperty: 'mass',
    maxPeopleEntities: 0,
    maxStarshipEntities: 0,
};
