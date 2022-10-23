import { screen, render, waitFor, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import { NewOrder } from './NewOrder';

describe('New Order Component', () => {
    const mockResponse = [{ id: 1, name: 'mock-name-1', price: 23.0 }];
    beforeEach(() =>
        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockResponse),
        } as any)
    );
    afterEach(() => {
        jest.restoreAllMocks();
    });
    it('should fetch new orders', async () => {
        render(
            <ThemeProvider theme={theme}>
                <NewOrder />
            </ThemeProvider>
        );
        await waitFor(() => {
            expect(screen.getByText('mock-name-1')).toBeInTheDocument();
        });
    });
    it('should increment quantity and update price and total', async () => {
        render(
            <ThemeProvider theme={theme}>
                <NewOrder />
            </ThemeProvider>
        );
        await waitFor(() => {
            expect(screen.getByText('mock-name-1')).toBeInTheDocument();
        });
        fireEvent.click(screen.getByTestId('increment-button'));
        await waitFor(() => {
            expect(screen.getByText('2')).toBeInTheDocument();
        });
        expect(screen.getAllByText(/46.00/).length).toBe(2);
    });
    it('should decerement quantity and update price and total', async () => {
        render(
            <ThemeProvider theme={theme}>
                <NewOrder />
            </ThemeProvider>
        );
        await waitFor(() => {
            expect(screen.getByText('mock-name-1')).toBeInTheDocument();
        });
        fireEvent.click(screen.getByTestId('decrement-button'));
        await waitFor(() => {
            expect(screen.getByText('0')).toBeInTheDocument();
        });
        expect(screen.getAllByText(/0.00/).length).toBe(2);
    });
    it('should refetch NewOrders on click NewOrder button', async () => {
        render(
            <ThemeProvider theme={theme}>
                <NewOrder />
            </ThemeProvider>
        );
        await waitFor(() => {
            expect(screen.getByText('mock-name-1')).toBeInTheDocument();
        });
        await waitFor(() => {
            expect(screen.getByText('1')).toBeInTheDocument();
        });
    });
    it('should show Error component when api fails', async () => {
        jest.spyOn(global, 'fetch').mockRejectedValue({
            json: jest.fn().mockRejectedValue('error'),
        } as any);
        render(
            <ThemeProvider theme={theme}>
                <NewOrder />
            </ThemeProvider>
        );
        await waitFor(() => {
            expect(
                screen.getByText('Sorry, Orders Not Available')
            ).toBeInTheDocument();
        });
    });
});
