import { JSX } from 'react';
import { Button } from '@mui/material';

interface ButtonComponentProps {
    content: string;
    onClick?: () => void;
}

export function ButtonComponent(props: ButtonComponentProps): JSX.Element {
    return (
        <Button variant='contained' onClick={props.onClick}>
            {props.content}
        </Button>
    );
}
