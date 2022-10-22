import { useNavigation } from '@react-navigation/native';
import { LocationType } from '../../../types';


import { Container, Name } from './styles';
import { PropsStack } from '../../../routes/Models';

type LocationRowProps = {
    item: LocationType;
}

export const LocationRow = ({item}: LocationRowProps) => {
    const navigation = useNavigation<PropsStack>()

    return (
        <Container onPress={() => navigation.navigate('Home')}>
            <Name>{item.name}</Name>
        </Container>
    );
}