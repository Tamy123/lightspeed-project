import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #E5E5E5;
    font-family: Roboto;
    height: 100%
  }
`;

export const Card = styled.div`
    width: 380px;
    padding: 16px;
    gap: 24px;
    background: ${(props) => props.theme.colors.white};
    margin: 15px;
`;

export const Frame = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
`;
