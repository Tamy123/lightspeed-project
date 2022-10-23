import { screen, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import { Error } from './Error';

describe('Error Component', () => {
    it('should render', () => {
        render(
            <ThemeProvider theme={theme}>
                <Error />
            </ThemeProvider>
        );
        expect(
            screen.getByText('Sorry, Orders Not Available')
        ).toBeInTheDocument();
    });
});
