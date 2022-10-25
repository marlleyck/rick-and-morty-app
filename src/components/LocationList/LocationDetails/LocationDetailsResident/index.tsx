import { useEffect, useState } from 'react';
import axios from 'axios';

import { CharacterType } from '../../../../types';

import { Container, Image, Text } from './styles';

type LocationDetailsResidentProps = {
    item: string[];
}

export const LocationDetailsResident = ({item}: LocationDetailsResidentProps) => {
    const [character, setCharacter] = useState<CharacterType>()
    const [characterImage, setCharacterImage] = useState()

    useEffect(() => {
        const fetchApi = async () => {
            const {data} = await axios.get(`${item}`)
            setCharacterImage(data.image)
            setCharacter(data)
        }

        fetchApi()
    }, [])
    return (
        <Container>
            <Image source={{uri: characterImage}}></Image>
            <Text>{character?.name}</Text>
        </Container>
    );
}