import { screen, render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import { Product } from './Product';

describe('Product Component', () => {
    const props = {
        id: 1,
        name: 'mock-product',
        price: 24,
        quantity: 1,
        dispatch: jest.fn(),
    };
    it('should render product, quantity counter, price', async () => {
        render(
            <ThemeProvider theme={theme}>
                <Product {...props} />
            </ThemeProvider>
        );
        expect(screen.getByText(/mock-product/)).toBeInTheDocument();
        expect(screen.getByTestId('product-name')).toBeInTheDocument();
        expect(screen.getByText('$24.00')).toBeInTheDocument();
        expect(screen.getByText(1)).toBeInTheDocument();
    });
    it('should trigger dispatch on increment button', async () => {
        render(
            <ThemeProvider theme={theme}>
                <Product {...props} />
            </ThemeProvider>
        );
        fireEvent.click(screen.getByTestId('increment-button'));
        expect(props.dispatch).toHaveBeenCalledTimes(1);
    });
});
