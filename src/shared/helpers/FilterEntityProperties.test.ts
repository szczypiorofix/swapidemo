import { describe, it, expect, assert } from 'vitest';

import {
    filterEntityPropertiesReducer,
    filterEntityProperties,
} from './FilterEntityProperties';
import { ComparablePeopleProps, ComparableStarshipProps } from '../models';
import {
    entityOfPeopleWithComparableProps1,
    entityOfStarshipWithComparableProps1,
    peopleEntity1,
    propertiesOfPeopleToCompare,
    propertiesOfStarshipsToCompare,
    starshipEntity1,
} from '../constants';
import { IPeople, IStarship } from 'swapi-ts';

describe('filterEntityPropertiesReducer', () => {
    const propertiesOfFilteredPeopleEntity: string[] = Object.keys(
        entityOfPeopleWithComparableProps1
    ).filter((entityKey) =>
        propertiesOfPeopleToCompare.includes(entityKey as keyof IPeople)
    );

    const propertiesOfFilteredStarshipEntity: string[] = Object.keys(
        entityOfStarshipWithComparableProps1
    ).filter((entityKey) =>
        propertiesOfStarshipsToCompare.includes(entityKey as keyof IStarship)
    );

    it('should return truthy value for object of type People with filtered properties', () => {
        const comparablePeopleProps: ComparablePeopleProps =
            filterEntityPropertiesReducer<ComparablePeopleProps>(
                entityOfPeopleWithComparableProps1,
                propertiesOfFilteredPeopleEntity
            );
        expect(comparablePeopleProps).toBeTruthy();
    });

    it('should have `mass` and `height` property of string type for filtered People entity', () => {
        const comparablePeopleProps: ComparablePeopleProps =
            filterEntityPropertiesReducer<ComparablePeopleProps>(
                entityOfPeopleWithComparableProps1,
                propertiesOfFilteredPeopleEntity
            );
        expect(comparablePeopleProps.mass).toBeTruthy();
        expect(comparablePeopleProps.height).toBeTruthy();
        expect(typeof comparablePeopleProps.mass).toBe('string');
        expect(typeof comparablePeopleProps.height).toBe('string');
    });

    it('should return truthy value for object of type Starship with filtered properties', () => {
        const comparableStarshipProps: ComparableStarshipProps =
            filterEntityPropertiesReducer<ComparableStarshipProps>(
                entityOfStarshipWithComparableProps1,
                propertiesOfFilteredStarshipEntity
            );
        expect(comparableStarshipProps).toBeTruthy();
    });

    it('should have `length`, `crew` and `passengers` property of string type for filtered Starship entity', () => {
        const comparableStarshipProps: ComparableStarshipProps =
            filterEntityPropertiesReducer<ComparableStarshipProps>(
                entityOfStarshipWithComparableProps1,
                propertiesOfFilteredStarshipEntity
            );
        expect(comparableStarshipProps.length).toBeTruthy();
        expect(comparableStarshipProps.crew).toBeTruthy();
        expect(comparableStarshipProps.passengers).toBeTruthy();
        expect(typeof comparableStarshipProps.length).toBe('string');
        expect(typeof comparableStarshipProps.crew).toBe('string');
        expect(typeof comparableStarshipProps.passengers).toBe('string');
    });
});

describe('filterEntityProperties', () => {
    function checkEntityForDesiredProperties(
        entity: ComparablePeopleProps | ComparableStarshipProps,
        properties: string[]
    ): boolean {
        for (const props of properties) {
            if (!Object.prototype.hasOwnProperty.call(entity, props)) {
                return false;
            }
        }
        return true;
    }

    it('should return not truthy value for null', () => {
        const comparablePeopleProps:
            | ComparablePeopleProps
            | ComparableStarshipProps
            | null = filterEntityProperties(null);
        expect(comparablePeopleProps).not.toBeTruthy();
    });
    it('should return null value for null', () => {
        const comparablePeopleProps:
            | ComparablePeopleProps
            | ComparableStarshipProps
            | null = filterEntityProperties(null);
        expect(comparablePeopleProps).toBeNull();
    });
    it('should return an object with filtered properties for people entity', () => {
        const entityWithFilteredProperties:
            | ComparablePeopleProps
            | ComparableStarshipProps
            | null = filterEntityProperties(peopleEntity1);
        expect(entityWithFilteredProperties).not.toBeNull();
    });
    it('should return an object with filtered properties for starship entity', () => {
        const entityWithFilteredProperties:
            | ComparablePeopleProps
            | ComparableStarshipProps
            | null = filterEntityProperties(starshipEntity1);
        expect(entityWithFilteredProperties).not.toBeNull();
    });
    it('should return desired amount of properties for people entity', () => {
        const entityWithFilteredProperties:
            | ComparablePeopleProps
            | ComparableStarshipProps
            | null = filterEntityProperties(peopleEntity1);
        assert(entityWithFilteredProperties !== null);
        const desiredPropertiesLength: number =
            propertiesOfPeopleToCompare.length;
        const amountOfProperties: number = Object.keys(
            entityWithFilteredProperties
        ).length;
        expect(amountOfProperties).toEqual(desiredPropertiesLength);
    });
    it('should return desired amount of properties for starship entity', () => {
        const entityWithFilteredProperties:
            | ComparablePeopleProps
            | ComparableStarshipProps
            | null = filterEntityProperties(starshipEntity1);
        assert(entityWithFilteredProperties !== null);
        const desiredPropertiesLength: number =
            propertiesOfStarshipsToCompare.length;
        const amountOfProperties: number = Object.keys(
            entityWithFilteredProperties
        ).length;
        expect(amountOfProperties).toEqual(desiredPropertiesLength);
    });
    it('should return filtered people entity with mass and height properties', () => {
        const entityWithFilteredProperties:
            | ComparablePeopleProps
            | ComparableStarshipProps
            | null = filterEntityProperties(peopleEntity1);
        assert(entityWithFilteredProperties !== null);
        const desiredProperties: string[] = propertiesOfPeopleToCompare;

        const hasEntityAllDesiredProperties: boolean =
            checkEntityForDesiredProperties(
                entityWithFilteredProperties,
                desiredProperties
            );

        expect(hasEntityAllDesiredProperties).toEqual(true);
    });

    it('should return filtered starship entity with crew, passengers and length properties', () => {
        const entityWithFilteredProperties:
            | ComparablePeopleProps
            | ComparableStarshipProps
            | null = filterEntityProperties(starshipEntity1);
        assert(entityWithFilteredProperties !== null);
        const desiredProperties: string[] = propertiesOfStarshipsToCompare;

        const hasEntityAllDesiredProperties: boolean =
            checkEntityForDesiredProperties(
                entityWithFilteredProperties,
                desiredProperties
            );

        expect(hasEntityAllDesiredProperties).toEqual(true);
    });
});
