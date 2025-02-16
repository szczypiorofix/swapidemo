import { JSX } from 'react';
import { Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import {
    ComparablePeopleProps,
    ComparableStarshipProps,
} from '../../shared/models';
import { PLAYER_SIDE } from '../../shared/enums';
import { EntityDetailsComponent } from '../entitydetails/EntityDetails.component.tsx';

export interface PlayerDetailsProps {
    playerName: string;
    entityName: string;
    score: number;
    winner: boolean;
    playerSide: PLAYER_SIDE.LEFT | PLAYER_SIDE.RIGHT;
    entity: ComparablePeopleProps | ComparableStarshipProps | null;
    propertiesToDisplay: string[];
    winnerProperty: string | null;
}

export function PlayerDetailsComponent(props: PlayerDetailsProps): JSX.Element {
    return (
        <Card
            variant='outlined'
            sx={{
                minWidth: '300px',
                mr: 4,
                ml: 4,
                position: 'relative',
                ...(props.winner && { borderColor: 'text.error' }),
            }}
        >
            {props.winner && (
                <Typography
                    color={'secondary'}
                    sx={{
                        mb: 1.5,
                        fontWeight: 'bold',
                        position: 'absolute',
                        top: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                    }}
                >
                    WINNER !!!
                </Typography>
            )}
            <CardContent>
                <Typography variant={'h4'}>{props.playerName}</Typography>
                <Typography
                    color={'primary'}
                    variant={'h5'}
                    sx={{
                        mb: 1.5,
                        mt: 2,
                    }}
                >
                    SCORE: <span>{props.score}</span>
                </Typography>
                {props.entity && (
                    <EntityDetailsComponent
                        entityName={props.entityName}
                        entityDetails={props.entity}
                        propertiesToDisplay={props.propertiesToDisplay}
                        winnerProperty={props.winnerProperty}
                    />
                )}
            </CardContent>
        </Card>
    );
}
