import { describe, it, expect } from 'vitest';

import { determineTheWinnerByProperty } from './DetermineTheWinnerByProperty';
import { PLAYER_SIDE } from '../enums';
import { IPeople, IStarship } from 'swapi-ts';
import { ComparablePeopleProps, ComparableStarshipProps } from '../models';
import {
    peopleEntity1,
    peopleEntity2,
    starshipEntity1,
    starshipEntity2,
} from '../constants';

describe('determineTheWinnerByProperty', () => {
    it('should return truthy value', () => {
        const playerWin: PLAYER_SIDE = determineTheWinnerByProperty<
            IPeople,
            keyof ComparablePeopleProps
        >(peopleEntity1, peopleEntity2, 'mass');
        expect(playerWin).toBeTruthy();
    });
    it('should decide that the left player won for mass property', () => {
        const playerWin: PLAYER_SIDE = determineTheWinnerByProperty<
            IPeople,
            keyof ComparablePeopleProps
        >(peopleEntity1, peopleEntity2, 'mass');
        expect(playerWin).toEqual(PLAYER_SIDE.LEFT);
    });
    it('should decide that the right player won for height property', () => {
        const playerWin: PLAYER_SIDE = determineTheWinnerByProperty<
            IPeople,
            keyof ComparablePeopleProps
        >(peopleEntity2, peopleEntity1, 'height');
        expect(playerWin).toEqual(PLAYER_SIDE.RIGHT);
    });
    it('should decide that the left player won for crew property', () => {
        const playerWin: PLAYER_SIDE = determineTheWinnerByProperty<
            IStarship,
            keyof ComparableStarshipProps
        >(starshipEntity1, starshipEntity2, 'crew');
        expect(playerWin).toEqual(PLAYER_SIDE.LEFT);
    });
    it('should decide that the left player won for passengers property', () => {
        const playerWin: PLAYER_SIDE = determineTheWinnerByProperty<
            IStarship,
            keyof ComparableStarshipProps
        >(starshipEntity1, starshipEntity2, 'passengers');
        expect(playerWin).toEqual(PLAYER_SIDE.LEFT);
    });
    it('should decide that the right player won for length property', () => {
        const playerWin: PLAYER_SIDE = determineTheWinnerByProperty<
            IStarship,
            keyof ComparableStarshipProps
        >(starshipEntity2, starshipEntity1, 'length');
        expect(playerWin).toEqual(PLAYER_SIDE.RIGHT);
    });
});
