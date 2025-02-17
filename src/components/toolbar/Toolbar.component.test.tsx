import { screen, render } from '@testing-library/react';
import { ToolbarComponent, ToolbarTitle } from './Toolbar.component';
import { describe, it, expect } from 'vitest';

describe('Toolbar', () => {
    it('renders Toolbar component', () => {
        render(<ToolbarComponent />);
        expect(screen.getByText(ToolbarTitle)).toBeInTheDocument();
    });
});
