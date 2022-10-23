import { NewOrder } from '../NewOrder';
import { GlobalStyle, Card, Frame } from './styles';

export const Layout = () => {
    return (
        <>
            <GlobalStyle />
            <Frame>
                <Card>
                    <NewOrder />
                </Card>
            </Frame>
        </>
    );
};
