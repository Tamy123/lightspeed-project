import loader from '../../assets/loader.gif';
import { LoaderContainer } from './styles';

export const Loader = () => {
    return (
        <LoaderContainer>
            <img src={loader} alt="loader" />
        </LoaderContainer>
    );
};
