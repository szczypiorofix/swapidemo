import { JSX } from 'react';
import { Box } from '@mui/material';
import { PlayerDetailsComponent as PlayerDetails } from './PlayersDetails.component.tsx';
import { ENTITY_TYPE, PLAYER_SIDE } from '../../shared/enums';
import { KeysOfEntities, PeopleOrStarshipOrNull } from '../../shared/models';
import {
    propertiesOfPeopleToCompare,
    propertiesOfStarshipsToCompare,
} from '../../shared/constants';
import { useGlobalAppContext } from '../../storage/AppContext.ts';
import { filterEntityProperties } from '../../shared/helpers';

export interface PlayerSectionComponentProps {
    playerLeftScore: number;
    playerRightScore: number;
    playerWin: PLAYER_SIDE;
    entityLeft: PeopleOrStarshipOrNull;
    entityRight: PeopleOrStarshipOrNull;
}

export function PlayersSectionComponent(
    props: PlayerSectionComponentProps
): JSX.Element {
    const { contextState } = useGlobalAppContext();

    const resolveEntityPropertiesToDisplay = (): string[] => {
        switch (contextState.loadedEntity) {
            case ENTITY_TYPE.PEOPLE:
                return propertiesOfPeopleToCompare;
            case ENTITY_TYPE.STARSHIPS:
                return propertiesOfStarshipsToCompare;
            default:
                return [];
        }
    };

    const winnerProperty: KeysOfEntities | null =
        props.playerWin === PLAYER_SIDE.NONE
            ? null
            : contextState.selectedProperty;

    const resolvePlayerDetails = () => {
        const filteredEntityLeft = filterEntityProperties(props.entityLeft);
        const filteredEntityRight = filterEntityProperties(props.entityRight);
        return (
            <>
                <PlayerDetails
                    playerName='Player left'
                    playerSide={PLAYER_SIDE.LEFT}
                    score={props.playerLeftScore}
                    entityName={props.entityLeft?.name || ''}
                    entity={filteredEntityLeft}
                    winner={props.playerWin === PLAYER_SIDE.LEFT}
                    propertiesToDisplay={resolveEntityPropertiesToDisplay()}
                    winnerProperty={winnerProperty}
                />
                <PlayerDetails
                    playerName='Player right'
                    playerSide={PLAYER_SIDE.RIGHT}
                    score={props.playerRightScore}
                    entityName={props.entityRight?.name || ''}
                    entity={filteredEntityRight}
                    winner={props.playerWin === PLAYER_SIDE.RIGHT}
                    propertiesToDisplay={resolveEntityPropertiesToDisplay()}
                    winnerProperty={winnerProperty}
                />
            </>
        );
    };

    return (
        <Box component='div' justifyContent='center' display='flex' mt={2}>
            {resolvePlayerDetails()}
        </Box>
    );
}
