import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PropertySelectionComponent } from './PropertySelection.component.tsx';

describe('PropertySelectionComponent', () => {
    it('renders property selection component', () => {
        const result = render(<PropertySelectionComponent />);
        const labelElement = result.container.querySelector(
            '#entity-property-select'
        );
        expect(labelElement).toBeInTheDocument();
    });
});
