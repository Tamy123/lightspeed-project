import { Text } from '@ls-jacob-lawrence/fe-interview-ds';
import { ErrorContainer } from './styles';

export const Error = () => {
    return (
        <ErrorContainer>
            <Text bold size={'large'}>
                Sorry, Orders Not Available
            </Text>
        </ErrorContainer>
    );
};
