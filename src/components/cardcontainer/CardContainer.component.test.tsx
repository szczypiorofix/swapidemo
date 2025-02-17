import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CardContainerComponent } from './CardContainer.component.tsx';

describe('CardContainerComponent', () => {
    it('renders card container component', () => {
        render(<CardContainerComponent />);
        expect(screen.getByText(/Let the battle begin!/i)).toBeInTheDocument();
    });
});
