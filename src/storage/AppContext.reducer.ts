import { AppContextState } from '../shared/models';
import { APP_REDUCER_ACTION_TYPE } from './AppContext.actions.ts';

export interface AppSettingsReducerAction {
    type: APP_REDUCER_ACTION_TYPE;
    payload: AppContextState;
}

export const appSettingsReducer = (
    prevState: AppContextState,
    action: AppSettingsReducerAction
): AppContextState => {
    const { type, payload } = action;
    // console.log('Setting state: ', type, " ", payload);
    switch (type) {
        case APP_REDUCER_ACTION_TYPE.SET_CONTEXT_STATE:
            return { ...payload };
        case APP_REDUCER_ACTION_TYPE.CHANGE_SELECTED_RESOURCE:
            return { ...prevState, selectedEntity: payload.selectedEntity };
        case APP_REDUCER_ACTION_TYPE.CHANGE_SELECTED_PROPERTY:
            return { ...prevState, selectedProperty: payload.selectedProperty };
        case APP_REDUCER_ACTION_TYPE.SET_MAX_PEOPLE_RESOURCE:
            return {
                ...prevState,
                maxPeopleEntities: payload.maxPeopleEntities,
            };
        case APP_REDUCER_ACTION_TYPE.SET_MAX_STARSHIPS_RESOURCE:
            return {
                ...prevState,
                maxStarshipEntities: payload.maxStarshipEntities,
            };
        case APP_REDUCER_ACTION_TYPE.SET_LOADED_RESOURCE:
            return {
                ...prevState,
                loadedEntity: payload.loadedEntity,
            };
        default:
            return prevState;
    }
};
