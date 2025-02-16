import { JSX } from 'react';
import Box from '@mui/material/Box';

import { ButtonComponent } from '../button/Button.component.tsx';

interface ResetGameProps {
    resetGame: () => void;
}

export function ResetGameComponent(props: ResetGameProps): JSX.Element {
    return (
        <Box component='div' justifyContent='center' display='flex' p={2}>
            <ButtonComponent
                content={'Reset game'}
                onClick={props.resetGame}
            ></ButtonComponent>
        </Box>
    );
}
