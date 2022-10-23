import styled from 'styled-components';

export const Button = styled.button`
    width: 100%;
    background: #2e61de;
    border-radius: 4px;
    color: ${(props) => props.theme.colors.white};
    height: 56px;
    border: transparent;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
`;

export const ButtonContainer = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    margin-bottom: 20px;
`;

export const ProductsContainer = styled.div`
    > div:nth-last-child(1) {
        border-bottom: 1px solid grey;
        margin-bottom: 8px;
    }
`;

export const TotalPriceContainer = styled.div`
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding: 15px;
`;
