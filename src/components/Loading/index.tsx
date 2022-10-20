import {Container, Image, Text} from './styles';

export const Loading = () => {
    return (
        <Container>
            <Image source={require('../../../assets/loading.gif')} />
            <Text>Carregando...</Text>
        </Container>
    )

}