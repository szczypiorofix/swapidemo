import { ChangeEvent, JSX } from 'react';
import Box from '@mui/material/Box';
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from '@mui/material';
import { ENTITY_TYPE } from '../../shared/enums';
import { useGlobalAppContext } from '../../storage/AppContext.ts';

export function EntitySelectionComponent(): JSX.Element {
    const { contextState, setSelectedEntity, setSelectedProperty } =
        useGlobalAppContext();

    function onEntityChange(event: ChangeEvent<HTMLInputElement>): void {
        setSelectedEntity({
            ...contextState,
            selectedEntity: event.target.value as ENTITY_TYPE,
        });
        setSelectedProperty({
            ...contextState,
            selectedProperty: null,
        });
    }

    return (
        <Box
            component='div'
            justifyContent='center'
            display='flex'
            sx={{ p: 2 }}
        >
            <FormControl>
                <FormLabel id='selected-entity-radio-buttons-group-label'>
                    Select entity and property
                </FormLabel>
                <RadioGroup
                    aria-labelledby='selected-entity-radio-buttons-group-label'
                    row
                    name='selected-entity-radio-buttons-group'
                    onChange={onEntityChange}
                    value={contextState.selectedEntity}
                >
                    <FormControlLabel
                        value={ENTITY_TYPE.PEOPLE}
                        control={<Radio />}
                        label='People'
                    />
                    <FormControlLabel
                        value={ENTITY_TYPE.STARSHIPS}
                        control={<Radio />}
                        label='Starships'
                    />
                </RadioGroup>
            </FormControl>
        </Box>
    );
}
