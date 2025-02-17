import { createContext, useContext } from 'react';

import { AppContextModel } from '../shared/models';
import { defaultAppContext } from './AppContext.default';

export const AppContext = createContext<AppContextModel>({
    contextState: defaultAppContext,
    setContextState: () => {},
    setLoadedEntity: () => {},
    setSelectedProperty: () => {},
    setSelectedEntity: () => {},
    setMaxPeopleEntities: () => {},
    setMaxStarshipsEntities: () => {},
});

export const useGlobalAppContext = () => useContext(AppContext);
