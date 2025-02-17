import { describe, expect, it } from 'vitest';

import { getSelectedResourceBaseUrlWithId } from './GetSelectedResourceBaseUrlWithId.ts';
import { ENTITY_TYPE } from '../enums';
import { peopleBaseUrl, starshipBaseUrl } from '../constants';

describe('getSelectedResourceBaseUrlWithId', () => {
    it('should return truthy url for people entity type and resource Id equals 1', () => {
        const entityType: ENTITY_TYPE = ENTITY_TYPE.PEOPLE;
        const resourceId: number = 1;
        const selectedResourceBaseUrl: string =
            getSelectedResourceBaseUrlWithId(entityType, resourceId);
        expect(selectedResourceBaseUrl).toBeTruthy();
    });
    it('should return truthy url for starship entity type and resource Id equals 1', () => {
        const entityType: ENTITY_TYPE = ENTITY_TYPE.STARSHIPS;
        const resourceId: number = 1;
        const selectedResourceBaseUrl: string =
            getSelectedResourceBaseUrlWithId(entityType, resourceId);
        expect(selectedResourceBaseUrl).toBeTruthy();
    });
    it('should return url for people entity type and resource Id equals 10', () => {
        const entityType: ENTITY_TYPE = ENTITY_TYPE.PEOPLE;
        const resourceId: number = 10;
        const selectedResourceBaseUrl: string =
            getSelectedResourceBaseUrlWithId(entityType, resourceId);
        expect(selectedResourceBaseUrl).toEqual(
            `${peopleBaseUrl}${resourceId}`
        );
    });
    it('should return url for people entity type and resource Id equals 12', () => {
        const entityType: ENTITY_TYPE = ENTITY_TYPE.STARSHIPS;
        const resourceId: number = 12;
        const selectedResourceBaseUrl: string =
            getSelectedResourceBaseUrlWithId(entityType, resourceId);
        expect(selectedResourceBaseUrl).toEqual(
            `${starshipBaseUrl}${resourceId}`
        );
    });
    it('should not return base url for people resource for none entity type', () => {
        const entityType: ENTITY_TYPE = ENTITY_TYPE.NONE;
        const resourceId: number = 1;
        const selectedResourceBaseUrl: string =
            // @ts-ignore
            getSelectedResourceBaseUrlWithId(entityType, resourceId);
        expect(selectedResourceBaseUrl).not.toEqual(
            `${peopleBaseUrl}${resourceId}`
        );
    });
    it('should not return base url for starships resource for none entity type', () => {
        const entityType: ENTITY_TYPE = ENTITY_TYPE.NONE;
        const resourceId: number = 1;
        const selectedResourceBaseUrl: string =
            // @ts-ignore
            getSelectedResourceBaseUrlWithId(entityType, resourceId);
        expect(selectedResourceBaseUrl).not.toEqual(
            `${starshipBaseUrl}${resourceId}`
        );
    });
});
