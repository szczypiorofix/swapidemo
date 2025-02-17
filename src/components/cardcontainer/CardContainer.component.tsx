import React, { JSX, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import {
    Backdrop,
    CircularProgress,
    Snackbar,
    SnackbarCloseReason,
    Typography,
} from '@mui/material';
import { IPeople, IStarship } from 'swapi-ts';

import { ButtonComponent } from '../button/Button.component.tsx';
import { EntitySelectionComponent as EntitySelection } from '../entity-selection/EntitySelection.component.tsx';
import { useGlobalAppContext } from '../../storage/AppContext.ts';
import { ENTITY_TYPE, PLAYER_SIDE } from '../../shared/enums';
import {
    ComparablePeopleProps,
    ComparableStarshipProps,
    PeopleOrStarshipOrNull,
} from '../../shared/models';

import { PropertySelectionComponent as PropertySelection } from '../property-selection/PropertySelection.component.tsx';
import {
    determineTheWinnerByProperty,
    sendPairOfRequestsAll,
    sendPairOfRequestsForPeople,
    sendPairOfRequestsForStarships,
} from '../../shared/helpers';

import { ResetGameComponent } from '../reset-game/ResetGame.component.tsx';
import { PlayersSectionComponent as PlayersSection } from '../player-section/PlayersSection.component.tsx';

interface EntityToCompare {
    entityLeft: PeopleOrStarshipOrNull;
    entityRight: PeopleOrStarshipOrNull;
}

interface Players {
    playerLeftScore: number;
    playerRightScore: number;
    playerWin: PLAYER_SIDE;
}

const defaultEntityToCompare: EntityToCompare = {
    entityLeft: null,
    entityRight: null,
};

export function CardContainerComponent(): JSX.Element {
    const { contextState, setContextState, setLoadedEntity } =
        useGlobalAppContext();
    const [shopBackdrop, setBackdrop] = useState<boolean>(true);

    const [entitiesToCompare, setEntitiesToCompare] = useState<EntityToCompare>(
        defaultEntityToCompare
    );

    const [players, setPlayers] = useState<Players>({
        playerLeftScore: 0,
        playerRightScore: 0,
        playerWin: PLAYER_SIDE.NONE,
    });
    const [warningSnackbarOpen, setWarningSnackbarOpen] = useState(false);

    const handleSnackbarClose = (
        _: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setWarningSnackbarOpen(false);
    };

    function resetGame(): void {
        setPlayers({
            playerRightScore: 0,
            playerWin: 0,
            playerLeftScore: PLAYER_SIDE.NONE,
        });
        setEntitiesToCompare(defaultEntityToCompare);
    }

    function determinePlayersScore(playerWin: PLAYER_SIDE): [number, number] {
        let playerLeftScore: number = players.playerLeftScore;
        let playerRightScore: number = players.playerRightScore;

        switch (playerWin) {
            case PLAYER_SIDE.LEFT:
                playerLeftScore++;
                break;
            case PLAYER_SIDE.RIGHT:
                playerRightScore++;
                break;
            default:
        }
        return [playerLeftScore, playerRightScore];
    }

    function sendRequestForPeopleEntities(): void {
        sendPairOfRequestsForPeople(contextState.maxPeopleEntities)
            .then(([people1, people2]) => {
                const playerWin: PLAYER_SIDE = determineTheWinnerByProperty<
                    IPeople,
                    keyof ComparablePeopleProps
                >(
                    people1,
                    people2,
                    contextState.selectedProperty as keyof ComparablePeopleProps
                );

                const [playerLeftScore, playerRightScore] =
                    determinePlayersScore(playerWin);

                setPlayers({
                    ...players,
                    playerWin: playerWin,
                    playerLeftScore: playerLeftScore,
                    playerRightScore: playerRightScore,
                });

                setLoadedEntity({
                    ...contextState,
                    loadedEntity: contextState.selectedEntity,
                });
                setEntitiesToCompare({
                    entityLeft: people1,
                    entityRight: people2,
                });
                setBackdrop(false);
            })
            .catch((error) => console.log(error));
    }

    function sendRequestForStarshipEntities(): void {
        sendPairOfRequestsForStarships(contextState.maxStarshipEntities)
            .then(([starship1, starship2]) => {
                const playerWin: PLAYER_SIDE = determineTheWinnerByProperty<
                    IStarship,
                    keyof ComparableStarshipProps
                >(
                    starship1,
                    starship2,
                    contextState.selectedProperty as keyof ComparableStarshipProps
                );

                const [playerLeftScore, playerRightScore] =
                    determinePlayersScore(playerWin);

                setPlayers({
                    ...players,
                    playerWin: playerWin,
                    playerLeftScore: playerLeftScore,
                    playerRightScore: playerRightScore,
                });

                setLoadedEntity({
                    ...contextState,
                    loadedEntity: contextState.selectedEntity,
                });
                setEntitiesToCompare({
                    entityLeft: starship1,
                    entityRight: starship2,
                });
                setBackdrop(false);
            })
            .catch((error) => {
                console.log(error);
                setBackdrop(false);
            });
    }

    function sendRequestForPairOfEntities() {
        switch (contextState.selectedEntity) {
            case ENTITY_TYPE.PEOPLE:
                setBackdrop(true);
                sendRequestForPeopleEntities();
                break;
            case ENTITY_TYPE.STARSHIPS:
                setBackdrop(true);
                sendRequestForStarshipEntities();
                break;
            default:
                setWarningSnackbarOpen(true);
        }
    }

    useEffect(() => {
        if (contextState.selectedEntity !== ENTITY_TYPE.NONE) {
            setWarningSnackbarOpen(false);
        }
    }, [contextState.selectedEntity]);

    useEffect(() => {
        if (
            contextState.maxPeopleEntities === 0 &&
            contextState.maxStarshipEntities === 0
        ) {
            sendPairOfRequestsAll()
                .then(([people, starships]) => {
                    setBackdrop(false);
                    setContextState({
                        ...contextState,
                        maxStarshipEntities: people.count,
                        maxPeopleEntities: starships.count,
                    });
                })
                .catch((error) => console.log(error));
        }
    }, [contextState, setContextState]);

    return (
        <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
            <Backdrop
                sx={(theme) => ({
                    color: '#fff',
                    zIndex: theme.zIndex.drawer + 1,
                })}
                open={shopBackdrop}
            >
                <CircularProgress color='inherit' />
            </Backdrop>
            <Typography component='h1' variant='h5' align='center'>
                Let the battle begin!
            </Typography>
            {contextState.maxPeopleEntities > 0 &&
                contextState.maxStarshipEntities > 0 && <EntitySelection />}
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={warningSnackbarOpen}
                autoHideDuration={2000}
                onClose={handleSnackbarClose}
                message='Please select resource type first!'
            />
            <PropertySelection />
            <Box component='div' justifyContent='center' display='flex' p={2}>
                <ButtonComponent
                    content={'Start !'}
                    onClick={() => sendRequestForPairOfEntities()}
                ></ButtonComponent>
            </Box>
            <PlayersSection
                playerWin={players.playerWin}
                entityLeft={entitiesToCompare.entityLeft}
                entityRight={entitiesToCompare.entityRight}
                playerLeftScore={players.playerLeftScore}
                playerRightScore={players.playerRightScore}
            />
            <ResetGameComponent resetGame={resetGame} />
        </Box>
    );
}
