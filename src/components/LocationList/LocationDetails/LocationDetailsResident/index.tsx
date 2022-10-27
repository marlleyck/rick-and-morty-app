import { useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../../../../contexts/AppContext';
import axios from 'axios';

import { CharacterType } from '../../../../types';
import { PropsStack } from '../../../../routes/Models';

import { ActivityIndicator } from 'react-native';
import { Container, Image, Text, ContainerLoading } from './styles';

type LocationDetailsResidentProps = {
    item: string[];
}

export const LocationDetailsResident = ({item}: LocationDetailsResidentProps) => {
    const navigation = useNavigation<PropsStack>()
    const { setCharacterName } = useContext(AppContext)

    const [character, setCharacter] = useState<CharacterType>()
    const [characterImage, setCharacterImage] = useState()
    const [apiIsArrived, setApiIsArrived] = useState(false)
    const [characterIsArrived, setCharacterIsArrived] = useState(false)

    useEffect(() => {
        const fetchApi = async () => {
            const {data} = await axios.get(`${item}`)
            setCharacterImage(data.image)
            setCharacter(data)
            setApiIsArrived(true)
        }
        fetchApi()
    }, [])

    const handlePressCharacter = async () => {
        setCharacterName(character?.name!)
        navigation.navigate('Home')
    }
    return (
        <>
            <Container onPress={handlePressCharacter}>
                {apiIsArrived ? 
                <>
                    <Image source={{uri: characterImage}}></Image>
                    <Text>{character?.name}</Text>
                </>
                : <ContainerLoading>
                    <ActivityIndicator size='large'  />
                </ContainerLoading> }
            </Container>
        </>
    );
}