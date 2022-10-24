import { OrderState } from '../../models';
import { getPrice } from '../../utils/helpers';
import {
    Counter,
    CounterBox,
    CounterButton,
    ProductContainer,
    ProductName,
    ProductPrice,
} from './styles';

interface ProductProps extends OrderState {
    dispatch: Function;
}

export const Product = ({
    id,
    name,
    price,
    quantity,
    dispatch,
}: ProductProps) => {
    return (
        <ProductContainer key={id}>
            <>
                <ProductName data-testid={'product-name'}>{name}</ProductName>
                <Counter>
                    <CounterButton
                        data-testid={'decrement-button'}
                        onClick={() =>
                            dispatch({
                                type: 'decrement',
                                payload: id,
                            })
                        }
                    >
                        -
                    </CounterButton>
                    <CounterBox>{quantity}</CounterBox>
                    <CounterButton
                        data-testid={'increment-button'}
                        onClick={() =>
                            dispatch({
                                type: 'increment',
                                payload: id,
                            })
                        }
                    >
                        +
                    </CounterButton>
                </Counter>
                <ProductPrice>${getPrice(price, quantity)}</ProductPrice>
            </>
        </ProductContainer>
    );
};
