import {
    Divider,
    List,
    ListItem,
    ListItemText,
    Typography,
} from '@mui/material';
import {
    ComparablePeopleProps,
    ComparableStarshipProps,
} from '../../shared/models';
import { JSX } from 'react';

interface EntityDetailsProps {
    entityName: string;
    entityDetails: ComparablePeopleProps | ComparableStarshipProps;
    propertiesToDisplay: string[];
    winnerProperty: string | null;
}

const style = {
    py: 0,
    width: '100%',
    maxWidth: 360,
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
};

export function EntityDetailsComponent(props: EntityDetailsProps): JSX.Element {
    function getEntityDetailsListItems(): Array<JSX.Element> {
        return Object.entries(props.entityDetails).map(
            ([key, value], index) => (
                <ListItem
                    key={'entity_details_' + index}
                    sx={{
                        ...(props.winnerProperty === key && {
                            textDecoration: 'underline',
                        }),
                    }}
                >
                    <ListItemText primary={`${key}: ${value}`} />
                </ListItem>
            )
        );
    }
    return (
        <List sx={style}>
            <ListItem>
                <Typography variant={'h6'}>{props.entityName}</Typography>
            </ListItem>
            <Divider variant='middle' component='li' />
            {getEntityDetailsListItems()}
        </List>
    );
}
