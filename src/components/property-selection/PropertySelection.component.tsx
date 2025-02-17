import React, { JSX, useEffect } from 'react';
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material';
import Box from '@mui/material/Box';
import { useGlobalAppContext } from '../../storage/AppContext.ts';
import { ENTITY_TYPE } from '../../shared/enums';
import {
    peopleFirstProperty,
    propertiesOfPeopleToCompare,
    propertiesOfStarshipsToCompare,
    starshipFirstProperty,
} from '../../shared/constants';
import {
    ComparablePeopleProps,
    ComparableStarshipProps,
    KeysOfEntities,
} from '../../shared/models';

export function PropertySelectionComponent(): JSX.Element {
    const { contextState, setSelectedProperty } = useGlobalAppContext();

    function onPropertyChange(event: SelectChangeEvent): void {
        setSelectedProperty({
            ...contextState,
            selectedProperty: event.target.value as
                | keyof ComparablePeopleProps
                | keyof ComparableStarshipProps,
        });
    }

    useEffect(() => {
        if (
            contextState.selectedEntity !== ENTITY_TYPE.NONE &&
            contextState.selectedProperty === null
        ) {
            switch (contextState.selectedEntity) {
                case ENTITY_TYPE.PEOPLE:
                    setSelectedProperty({
                        ...contextState,
                        selectedProperty: peopleFirstProperty,
                    });
                    break;
                case ENTITY_TYPE.STARSHIPS:
                    setSelectedProperty({
                        ...contextState,
                        selectedProperty: starshipFirstProperty,
                    });
                    break;
            }
        }
    }, [contextState, contextState.selectedEntity, setSelectedProperty]);

    function getMenuItems(
        entries: Array<KeysOfEntities>
    ): React.JSX.Element | Array<React.JSX.Element> {
        return entries.map((entityKey, index) => (
            <MenuItem key={entityKey + index} value={entityKey}>
                {entityKey}
            </MenuItem>
        ));
    }

    function getSelectMenuItems():
        | React.JSX.Element
        | Array<React.JSX.Element> {
        switch (contextState.selectedEntity) {
            case ENTITY_TYPE.PEOPLE:
                return getMenuItems(propertiesOfPeopleToCompare);
            case ENTITY_TYPE.STARSHIPS:
                return getMenuItems(propertiesOfStarshipsToCompare);
            default:
                return <></>;
        }
    }

    return (
        <Box
            component='div'
            justifyContent='center'
            display='flex'
            sx={{ minHeight: 88, p: 2 }}
        >
            {contextState.selectedEntity === ENTITY_TYPE.NONE ? (
                <FormControl sx={{ minWidth: 240 }}>
                    <InputLabel id='entity-property-select-label'>
                        Property
                    </InputLabel>
                    <Select
                        labelId='entity-property-select-label'
                        id='entity-property-select'
                        label='Property'
                        value=''
                    ></Select>
                </FormControl>
            ) : (
                <FormControl sx={{ minWidth: 240 }}>
                    <InputLabel id='entity-property-select-label'>
                        Property
                    </InputLabel>
                    <Select
                        labelId='entity-property-select-label'
                        id='entity-property-select'
                        value={contextState.selectedProperty || ''}
                        label='Property'
                        onChange={onPropertyChange}
                    >
                        {getSelectMenuItems()}
                    </Select>
                </FormControl>
            )}
        </Box>
    );
}
