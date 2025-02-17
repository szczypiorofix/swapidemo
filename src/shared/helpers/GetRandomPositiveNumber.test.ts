import { describe, it, expect } from 'vitest';

import { getRandomPositiveNumber } from './GetRandomPositiveNumber.ts';

describe('getRandomPositiveNumber', () => {
    it('should return truthy value', () => {
        const maxNumber = 10;
        const randomNumber: number = getRandomPositiveNumber(maxNumber);
        expect(randomNumber).toBeTruthy();
    });
    it('should generate random positive number equal or less than 10', () => {
        const maxNumber = 10;
        const randomNumber: number = getRandomPositiveNumber(maxNumber);
        expect(randomNumber).toBeLessThanOrEqual(maxNumber);
    });
    it('should generate random positive number equal or less than 100', () => {
        const maxNumber = 100;
        const randomNumber: number = getRandomPositiveNumber(maxNumber);
        expect(randomNumber).toBeLessThanOrEqual(maxNumber);
    });
    it('should generate random positive number not less than 0', () => {
        const maxNumber = 10;
        const randomNumber: number = getRandomPositiveNumber(maxNumber);
        expect(randomNumber).toBeGreaterThan(0);
    });
    it('should generate random positive number equal 1 with max equals 1', () => {
        const maxNumber = 1;
        const randomNumber: number = getRandomPositiveNumber(maxNumber);
        expect(randomNumber).not.toEqual(0);
        expect(randomNumber).toEqual(1);
    });
    it('should generate random positive number equal or less than 100 for max equals -100', () => {
        const maxNumber = -100;
        const randomNumber: number = getRandomPositiveNumber(maxNumber);
        expect(randomNumber).toBeLessThanOrEqual(Math.abs(maxNumber));
    });
});
