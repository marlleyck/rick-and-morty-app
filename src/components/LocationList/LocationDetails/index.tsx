import { useEffect, useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import { api } from '../../../services/api';

import { LocationType } from '../../../types';

import { Container, Info } from './styles';

type LocationDetailsProps = {
    route: RouteProp<{params: {itemPressed: LocationType}}, 'params'>;
}

export const LocationDetails = ({route}: LocationDetailsProps) => {
    const [name, setName] = useState('')
    const [dimension, setDimension] = useState('')
    const [type, setType] = useState('')

    useEffect(() => {
       setName(route.params.itemPressed.name)
       setDimension(route.params.itemPressed.dimension)
       setType(route.params.itemPressed.type)
    }, [])

    return (
        <Container>
            <Info>Nome: {name}</Info>
            <Info>Dimensão: {dimension == 'unknown' ? 'Desconhecido' : dimension}</Info>
            <Info>Tipo: {type}</Info>
        </Container>
    );
}