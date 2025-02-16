import { JSX } from 'react';
import { Toolbar, Typography } from '@mui/material';

export const ToolbarTitle: string = 'Star Wars API Demo';

export function ToolbarComponent(): JSX.Element {
    return (
        <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                {ToolbarTitle}
            </Typography>
        </Toolbar>
    );
}
