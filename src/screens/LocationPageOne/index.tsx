import { LocationList } from '../../components/LocationList';

import { AntDesign } from '@expo/vector-icons';

import { Container, ContainerJumpPages} from './styles';
import { useNavigation } from '@react-navigation/native';

import { PropsStack } from '../../routes/Models';

export const LocationPageOne = () => {
    const navigation = useNavigation<PropsStack>()

    return (
        <Container>
            <ContainerJumpPages>
                <AntDesign 
                name="leftcircle" 
                size={30} 
                color="white" 
                style={{marginRight: 50}}
                onPress={() => navigation.navigate('Home')} />
                <AntDesign name="rightcircle" size={30} color="white" />
            </ContainerJumpPages>
            <LocationList />
        </Container>
    );
}