import { screen, render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';
import { ToolbarTitle } from './components/toolbar/Toolbar.component.tsx';

describe('App', () => {
    it('renders main App component', () => {
        render(<App />);
        expect(screen.getByText(ToolbarTitle)).toBeInTheDocument();
    });
});
