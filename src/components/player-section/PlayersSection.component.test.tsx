import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PlayersSectionComponent } from './PlayersSection.component.tsx';
import { PLAYER_SIDE } from '../../shared/enums';
import {
    entityOfStarshipWithComparableProps1,
    entityOfStarshipWithComparableProps2,
} from '../../shared/constants';
import { PeopleOrStarshipOrNull } from '../../shared/models';

describe('PlayersSectionComponent', () => {
    it('renders two player sections for no entities', () => {
        render(
            <PlayersSectionComponent
                playerWin={PLAYER_SIDE.NONE}
                playerLeftScore={0}
                playerRightScore={0}
                entityLeft={null}
                entityRight={null}
            />
        );
        expect(screen.getByText(/Player Left/i)).toBeInTheDocument();
        expect(screen.getByText(/Player Right/i)).toBeInTheDocument();
    });
    it('renders two player sections for two entities', () => {
        render(
            <PlayersSectionComponent
                playerWin={PLAYER_SIDE.RIGHT}
                playerLeftScore={0}
                playerRightScore={1}
                entityLeft={
                    entityOfStarshipWithComparableProps1 as PeopleOrStarshipOrNull
                }
                entityRight={
                    entityOfStarshipWithComparableProps2 as PeopleOrStarshipOrNull
                }
            />
        );
        expect(screen.getByText(/Player Left/i)).toBeInTheDocument();
        expect(screen.getByText(/Player Right/i)).toBeInTheDocument();
    });
});
