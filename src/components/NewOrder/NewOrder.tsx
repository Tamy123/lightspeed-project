import { useEffect, useReducer, useState } from 'react';
import { Product } from '../Product';
import { OrderState } from '../../models';
import { Loader } from '../Loader';
import { Error } from '../Error';
import { Text } from '@ls-jacob-lawrence/fe-interview-ds';
import {
    Button,
    ButtonContainer,
    ProductsContainer,
    TotalPriceContainer,
} from './styles';
import { API_URL } from '../../constants/apiRoute';

interface StoreAction {
    type: string;
    payload?: OrderState[] | number;
}

function orderReducer(state: OrderState[], action: StoreAction) {
    switch (action.type) {
        case 'increment':
        case 'decrement': {
            const selectedIndex = state.findIndex(
                (order) => order.id === action.payload
            );
            if (
                state[selectedIndex].quantity > 0 ||
                action.type === 'increment'
            ) {
                state[selectedIndex].quantity =
                    state[selectedIndex].quantity +
                    (action.type === 'increment' ? 1 : -1);
            }
            return [...state];
        }
        case 'success': {
            return [...(action.payload as OrderState[])];
        }
        case 'reset': {
            return [];
        }
        default:
            return state;
    }
}

const getOrders = async (dispatch: Function, setError: Function) => {
    try {
        const response = await fetch(API_URL);
        const orders = await response.json();
        dispatch({
            type: 'success',
            payload: orders.map((order: OrderState) => ({
                ...order,
                quantity: 1,
            })),
        });
    } catch (error) {
        console.log(error);
        dispatch({ type: 'reset' });
        setError('error occured');
    }
};

export const NewOrder = () => {
    const [state, dispatch] = useReducer(orderReducer, []);
    const [error, setError] = useState<string>('');

    const handleNewOrder = () => {
        dispatch({ type: 'reset' });
        getOrders(dispatch, setError);
    };

    useEffect(() => {
        getOrders(dispatch, setError);
    }, []);

    const totalPrice = state
        .reduce(
            (previousValue, currentValue) =>
                currentValue.quantity * currentValue.price + previousValue,
            0
        )
        .toFixed(2);

    return (
        <>
            <ButtonContainer>
                <Button onClick={handleNewOrder}>New Order</Button>
            </ButtonContainer>
            <ProductsContainer>
                {state.length === 0 && !error ? (
                    <Loader />
                ) : error && state.length === 0 ? (
                    <Error />
                ) : (
                    state.map((order) => (
                        <Product {...order} dispatch={dispatch} />
                    ))
                )}
            </ProductsContainer>
            <TotalPriceContainer>
                <Text bold size="large">
                    Total
                </Text>
                <Text bold size="large">
                    ${totalPrice}
                </Text>
            </TotalPriceContainer>
        </>
    );
};
