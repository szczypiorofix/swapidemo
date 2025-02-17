/**
 * Generate random positive number
 * @param max number: Max number
 * @return number: generated random number
 */
export function getRandomPositiveNumber(max: number): number {
    return Math.abs(Math.floor(Math.random() * max) + 1);
}
