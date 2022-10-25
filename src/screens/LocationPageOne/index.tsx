import { useContext } from 'react';
import { LocationList } from '../../components/LocationList';

import { AntDesign } from '@expo/vector-icons';

import { Container, ContainerJumpPages} from './styles';

import { AppContext } from '../../contexts/AppContext';

export const LocationPageOne = () => {
    const { goToNextPage, goToPrevPage, location } = useContext(AppContext)

    return (
        <Container location={location}>
            <ContainerJumpPages>
                <AntDesign 
                name="leftcircle" 
                size={30} 
                color="white" 
                style={{marginRight: 50}}
                onPress={() => goToPrevPage()} />

                <AntDesign 
                name="rightcircle" 
                size={30} 
                color="white"
                onPress={() => goToNextPage()} />
            </ContainerJumpPages>
            <LocationList />
        </Container>
    );
}