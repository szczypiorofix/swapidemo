import { describe, expect, it } from 'vitest';

import { getSelectedResourceBaseUrl } from './GetSelectedResourceBaseUrl';
import { ENTITY_TYPE } from '../enums';
import { peopleBaseUrl, starshipBaseUrl } from '../constants';

describe('getSelectedResourceBaseUrl', () => {
    it('should return not truthy value for none entity type', () => {
        const entityType: ENTITY_TYPE = ENTITY_TYPE.NONE;
        const selectedResourceBaseUrl: string =
            getSelectedResourceBaseUrl(entityType);
        expect(selectedResourceBaseUrl).not.toBeTruthy();
    });
    it('should return truthy value for entity type people', () => {
        const entityType: ENTITY_TYPE = ENTITY_TYPE.PEOPLE;
        const selectedResourceBaseUrl: string =
            getSelectedResourceBaseUrl(entityType);
        expect(selectedResourceBaseUrl).toBeTruthy();
    });
    it('should return truthy value for entity type starship', () => {
        const entityType: ENTITY_TYPE = ENTITY_TYPE.STARSHIPS;
        const selectedResourceBaseUrl: string =
            getSelectedResourceBaseUrl(entityType);
        expect(selectedResourceBaseUrl).toBeTruthy();
    });
    it('should return url for people resource', () => {
        const entityType: ENTITY_TYPE = ENTITY_TYPE.PEOPLE;
        const selectedResourceBaseUrl: string =
            getSelectedResourceBaseUrl(entityType);
        expect(selectedResourceBaseUrl).toEqual(peopleBaseUrl);
    });
    it('should return url for starships resource', () => {
        const entityType: ENTITY_TYPE = ENTITY_TYPE.STARSHIPS;
        const selectedResourceBaseUrl: string =
            getSelectedResourceBaseUrl(entityType);
        expect(selectedResourceBaseUrl).toEqual(starshipBaseUrl);
    });
    it('should not return url for starships resource', () => {
        const entityType: ENTITY_TYPE = ENTITY_TYPE.NONE;
        const selectedResourceBaseUrl: string =
            getSelectedResourceBaseUrl(entityType);
        expect(selectedResourceBaseUrl).not.toEqual(starshipBaseUrl);
    });
    it('should not return url for people resource', () => {
        const entityType: ENTITY_TYPE = ENTITY_TYPE.NONE;
        const selectedResourceBaseUrl: string =
            getSelectedResourceBaseUrl(entityType);
        expect(selectedResourceBaseUrl).not.toEqual(peopleBaseUrl);
    });
});
