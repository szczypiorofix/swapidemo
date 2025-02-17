import { JSX, useReducer } from 'react';
import { AppBar, Box, Container } from '@mui/material';
import { ToolbarComponent } from './components/toolbar/Toolbar.component.tsx';
import { CardContainerComponent as CardContainer } from './components/cardcontainer/CardContainer.component.tsx';
import { AppContext } from './storage/AppContext.ts';
import { getAppContextProvider } from './storage/AppContext.provider.ts';
import { defaultAppContext } from './storage/AppContext.default.ts';
import { appSettingsReducer } from './storage/AppContext.reducer.ts';

function App(): JSX.Element {
    const [state, dispatch] = useReducer(appSettingsReducer, defaultAppContext);

    return (
        <AppContext.Provider value={getAppContextProvider(state, dispatch)}>
            <Box>
                <AppBar position='static'>
                    <ToolbarComponent />
                </AppBar>
                <Container maxWidth='lg'>
                    <CardContainer />
                </Container>
            </Box>
        </AppContext.Provider>
    );
}

export default App;
