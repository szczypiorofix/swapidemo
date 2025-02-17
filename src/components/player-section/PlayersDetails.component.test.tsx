import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PlayerDetailsComponent } from './PlayersDetails.component.tsx';
import { PLAYER_SIDE } from '../../shared/enums';
import {
    entityOfStarshipWithComparableProps1,
    entityOfPeopleWithComparableProps1,
} from '../../shared/constants';

describe('PlayerDetailsComponent', () => {
    it('renders player details component for People entity for left player', () => {
        render(
            <PlayerDetailsComponent
                playerSide={PLAYER_SIDE.LEFT}
                playerName={'Player Left'}
                winner={false}
                score={0}
                entityName={'Entity name'}
                winnerProperty={''}
                entity={entityOfStarshipWithComparableProps1}
                propertiesToDisplay={[]}
            />
        );
        expect(screen.getByText('Player Left')).toBeInTheDocument();
        expect(screen.getByText('Entity name')).toBeInTheDocument();
    });
    it('renders player details component', () => {
        render(
            <PlayerDetailsComponent
                playerSide={PLAYER_SIDE.LEFT}
                playerName={'Player Left'}
                winner={false}
                score={0}
                entityName={'Entity name'}
                winnerProperty={''}
                entity={entityOfPeopleWithComparableProps1}
                propertiesToDisplay={[]}
            />
        );
        expect(screen.getByText('Player Left')).toBeInTheDocument();
        expect(screen.getByText('Entity name')).toBeInTheDocument();
    });
    it('renders player details component for People entity for right player', () => {
        render(
            <PlayerDetailsComponent
                playerSide={PLAYER_SIDE.RIGHT}
                playerName={'Player Right'}
                winner={false}
                score={0}
                entityName={'Entity name'}
                winnerProperty={''}
                entity={entityOfStarshipWithComparableProps1}
                propertiesToDisplay={[]}
            />
        );
        expect(screen.getByText('Player Right')).toBeInTheDocument();
        expect(screen.getByText('Entity name')).toBeInTheDocument();
    });
    it('renders player details component with winner indicator', () => {
        render(
            <PlayerDetailsComponent
                playerSide={PLAYER_SIDE.LEFT}
                playerName={'Player Left'}
                winner={true}
                score={0}
                entityName={'Entity name'}
                winnerProperty={'mass'}
                entity={entityOfStarshipWithComparableProps1}
                propertiesToDisplay={[]}
            />
        );
        expect(screen.getByText('WINNER !!!')).toBeInTheDocument();
    });
    it('renders player details component with visible properties', () => {
        render(
            <PlayerDetailsComponent
                playerSide={PLAYER_SIDE.LEFT}
                playerName={'Player Left'}
                winner={true}
                score={0}
                entityName={'Entity name'}
                winnerProperty={'mass'}
                entity={entityOfStarshipWithComparableProps1}
                propertiesToDisplay={[]}
            />
        );
        expect(screen.getByText('crew: 12')).toBeInTheDocument();
        expect(screen.getByText('passengers: 10')).toBeInTheDocument();
        expect(screen.getByText('length: 30')).toBeInTheDocument();
    });
    it('renders player details component visible score', () => {
        render(
            <PlayerDetailsComponent
                playerSide={PLAYER_SIDE.LEFT}
                playerName={'Player Left'}
                winner={true}
                score={6}
                entityName={'Entity name'}
                winnerProperty={'mass'}
                entity={entityOfStarshipWithComparableProps1}
                propertiesToDisplay={[]}
            />
        );
        expect(screen.getByRole('player-score')).toBeInTheDocument();
    });
});
