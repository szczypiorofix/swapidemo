import { PLAYER_SIDE } from '../enums';

/**
 * Determine which player (Player Left, Player Right, or Neither) wins the comparison of the given properties.
 * @param entity1 IPeople | IStarship: entity 1
 * @param entity2 IPeople | IStarship: entity 2
 * @param propertyToCompare keyof IPeople | keyof IStarship
 * @return PLAYER_SIDE: return which player (on none) wins
 */
export function determineTheWinnerByProperty<T, V extends keyof T>(
    entity1: T,
    entity2: T,
    propertyToCompare: V
): PLAYER_SIDE {
    const value1 = entity1[propertyToCompare];
    const value2 = entity2[propertyToCompare];

    const num1: number | T[V] =
        typeof value1 === 'string' ? parseFloat(value1) : value1;
    const num2: number | T[V] =
        typeof value2 === 'string' ? parseFloat(value2) : value2;

    if (num1 > num2) {
        return PLAYER_SIDE.LEFT;
    } else if (num1 < num2) {
        return PLAYER_SIDE.RIGHT;
    } else {
        return PLAYER_SIDE.NONE;
    }
}
