import styled from 'styled-components';

export const ProductContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`;

export const ProductName = styled.div`
    flex: 3;
    font-weight: 400;
    font-size: 15px;
    color: ${(props) => props.theme.colors.primary};
`;

export const ProductPrice = styled.div`
    flex: 1;
    font-weight: 700;
    font-size: 15px;
    text-align: end;
    color: ${(props) => props.theme.colors.primary};
`;

export const Counter = styled.div`
    width: 107px;
    height: 36px;
    background: #d7dce1;
    border-radius: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-right: 10px;
    > div:nth-last-child(1) {
        border-bottom: 1px solid grey;
    }
`;

export const CounterBox = styled.div`
    width: 50px;
    height: 30px;
    background: ${(props) => props.theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 15px;
    color: ${(props) => props.theme.colors.primary};
`;

export const CounterButton = styled.button`
    border: 0;
    background: transparent;
    cursor: pointer;
    font-weight: 700;
    font-size: 15px;
`;
