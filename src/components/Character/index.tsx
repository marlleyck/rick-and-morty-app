import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';

import { Loading } from '../Loading';

import { Container, ContentInfo, ContentRow, Name, PointStatus, Info, Titles, Image } from './styles';

export const Character = () => {
    const {character, isLoading} = useContext(AppContext)


    return (
        <Container>
        {isLoading
         ? <Loading /> 
         : <>
                <Image source={{uri: character?.image}} />
                <Name>{character?.name}</Name>
                <ContentInfo>
                    <ContentRow>
                        <PointStatus status={character?.status}></PointStatus>
                        <Info>{character?.status} - </Info>
                        <Info>{character?.species}</Info>
                    </ContentRow>
                    <ContentRow>
                        <Titles>Origem: </Titles>
                        <Info>{character?.origin.name == 'unknown' ? 'Desconhecido' : character?.origin.name}</Info>
                    </ContentRow>
                    <ContentRow>
                        <Titles>Gênero: </Titles>
                        <Info>{character?.gender}</Info>
                    </ContentRow>
                </ContentInfo>
            </>}
        </Container>
    );
}