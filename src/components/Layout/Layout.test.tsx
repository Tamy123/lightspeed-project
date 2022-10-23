import { screen, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import { Layout } from './Layout';

describe('Layout Component', () => {
    it('should render', () => {
        render(
            <ThemeProvider theme={theme}>
                <Layout />
            </ThemeProvider>
        );
        expect(screen.getByText('New Order')).toBeInTheDocument();
        expect(screen.getByText('Total')).toBeInTheDocument();
    });
});
