import { screen, render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ResetGameComponent } from './ResetGame.component.tsx';

describe('ResetGame', () => {
    it('renders reset game button', () => {
        render(<ResetGameComponent resetGame={() => {}} />);
        expect(screen.getByText('Reset game')).toBeInTheDocument();
    });
});
