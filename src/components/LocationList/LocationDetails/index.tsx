import { useEffect, useState } from 'react';
import { RouteProp } from '@react-navigation/native';

import { LocationType } from '../../../types';

import { Container, Content, FlatList, Info, InfoTitle, ContentInfo } from './styles';
import { LocationDetailsResident } from './LocationDetailsResident';

type LocationDetailsProps = {
    route: RouteProp<{params: {itemPressed: LocationType}}, 'params'>;
}

export const LocationDetails = ({route}: LocationDetailsProps) => {
    const [name, setName] = useState('')
    const [dimension, setDimension] = useState('')
    const [type, setType] = useState('')
    const [residents, setResidents] = useState<string[]>()

    useEffect(() => {
       setName(route.params.itemPressed.name)
       setDimension(route.params.itemPressed.dimension)
       setType(route.params.itemPressed.type)
       setResidents(route.params.itemPressed.residents)
    }, [])

    return (
        <Container>
            <Content>
                <ContentInfo>
                    <InfoTitle>Nome: </InfoTitle>
                    <Info>{name}</Info>
                </ContentInfo>

                <ContentInfo>
                    <InfoTitle>Dimensão: </InfoTitle>
                    <Info>{dimension == 'unknown' ? 'Desconhecido' : dimension}</Info>
                </ContentInfo>

                <ContentInfo>
                    <InfoTitle>Tipo: </InfoTitle>
                    <Info>{type}</Info>
                </ContentInfo>

                <FlatList
                data={residents}
                keyExtractor={({item, index}: {item: any, index: any}) => index}
                renderItem={({item}: {item: string[]}) => <LocationDetailsResident item={item} /> }/>
            </Content>
        </Container>
    );
}