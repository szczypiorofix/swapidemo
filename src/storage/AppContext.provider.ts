import React from 'react';

import { AppContextModel, AppContextState } from '../shared/models';
import { APP_REDUCER_ACTION_TYPE } from './AppContext.actions.ts';
import { AppSettingsReducerAction } from './AppContext.reducer.ts';

export const getAppContextProvider: (
    contextState: AppContextState,
    dispatch: React.Dispatch<AppSettingsReducerAction>
) => AppContextModel = (
    contextState: AppContextState,
    dispatch: React.Dispatch<AppSettingsReducerAction>
): AppContextModel => {
    return {
        contextState: contextState,
        setContextState(_state) {
            // console.log('setContextState');
            dispatch({
                type: APP_REDUCER_ACTION_TYPE.SET_CONTEXT_STATE,
                payload: { ..._state } as AppContextState,
            });
        },
        setSelectedEntity(_state) {
            // console.log('setSelectedResource');
            dispatch({
                type: APP_REDUCER_ACTION_TYPE.CHANGE_SELECTED_RESOURCE,
                payload: {
                    ..._state,
                    selectedEntity: _state.selectedEntity,
                },
            });
        },
        setSelectedProperty(_state) {
            dispatch({
                type: APP_REDUCER_ACTION_TYPE.CHANGE_SELECTED_PROPERTY,
                payload: {
                    ..._state,
                    selectedProperty: _state.selectedProperty,
                },
            });
        },
        setLoadedEntity(_state) {
            dispatch({
                type: APP_REDUCER_ACTION_TYPE.SET_LOADED_RESOURCE,
                payload: {
                    ..._state,
                    loadedEntity: _state.loadedEntity,
                } as AppContextState,
            });
        },
        setMaxPeopleEntities(_state) {
            dispatch({
                type: APP_REDUCER_ACTION_TYPE.SET_MAX_PEOPLE_RESOURCE,
                payload: {
                    ..._state,
                    maxPeopleEntities: _state.maxPeopleEntities,
                } as AppContextState,
            });
        },
        setMaxStarshipsEntities(_state) {
            dispatch({
                type: APP_REDUCER_ACTION_TYPE.SET_MAX_STARSHIPS_RESOURCE,
                payload: {
                    ..._state,
                    maxStarshipEntities: _state.maxStarshipEntities,
                } as AppContextState,
            });
        },
    };
};
