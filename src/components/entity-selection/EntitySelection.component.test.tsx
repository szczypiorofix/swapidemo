import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { EntitySelectionComponent } from './EntitySelection.component.tsx';

describe('EntitySelectionComponent', () => {
    it('renders entity selection component', () => {
        render(<EntitySelectionComponent />);
        expect(
            screen.getByText(/Select entity and property/i)
        ).toBeInTheDocument();
    });
    it('renders entity selection component with People and Starships entries', () => {
        render(<EntitySelectionComponent />);
        expect(screen.getByText(/People/i)).toBeInTheDocument();
        expect(screen.getByText(/Starships/i)).toBeInTheDocument();
    });
});
