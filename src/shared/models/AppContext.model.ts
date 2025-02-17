import { ENTITY_TYPE } from '../enums';
import { KeysOfEntities } from './Entities.model.ts';

export interface AppContextState {
    selectedEntity: ENTITY_TYPE;
    loadedEntity: ENTITY_TYPE;
    selectedProperty: KeysOfEntities | null;
    maxPeopleEntities: number;
    maxStarshipEntities: number;
}

export interface AppContextModel {
    contextState: AppContextState;
    setContextState: (state: AppContextState) => void;
    setSelectedEntity: (state: AppContextState) => void;
    setSelectedProperty: (state: AppContextState) => void;
    setMaxPeopleEntities: (state: AppContextState) => void;
    setMaxStarshipsEntities: (state: AppContextState) => void;
    setLoadedEntity: (state: AppContextState) => void;
}
