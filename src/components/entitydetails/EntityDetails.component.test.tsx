import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
    entityOfStarshipWithComparableProps1,
    propertiesOfStarshipsToCompare,
} from '../../shared/constants';
import { EntityDetailsComponent } from './EntityDetails.component.tsx';

describe('EntityDetailsComponent', () => {
    it('renders entity details component for starship entity', () => {
        render(
            <EntityDetailsComponent
                entityName={'Entity name'}
                propertiesToDisplay={propertiesOfStarshipsToCompare}
                entityDetails={entityOfStarshipWithComparableProps1}
                winnerProperty={'length'}
            />
        );
        expect(screen.getByText(/Entity name/i)).toBeInTheDocument();
    });
    it('renders entity details component for starship entity with no properties to display', () => {
        render(
            <EntityDetailsComponent
                entityName={'Entity name'}
                propertiesToDisplay={[]}
                entityDetails={entityOfStarshipWithComparableProps1}
                winnerProperty={'length'}
            />
        );
        expect(screen.getByText(/Entity name/i)).toBeInTheDocument();
    });
});
