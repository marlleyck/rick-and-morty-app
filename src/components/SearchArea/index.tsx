import { useContext, useState } from 'react';
import { AppContext } from '../../contexts/AppContext';

import { Container, TextInput, ButtonSearch, Text } from './styles';

export const SearchArea = () => {
    const { setCharacterName } = useContext(AppContext)
    const [characterInputText, setCharacterInputText] = useState('')

    const handleSearchCharacter = (text: string) => {
        setCharacterName(characterInputText)
    }

    return (
        <Container>
            <TextInput
            placeholder='Digite o personagem'
            onChangeText={(text: string) => setCharacterInputText(text)}  />
            <ButtonSearch 
            onPress={handleSearchCharacter}>
                <Text>Pesquisar</Text>
            </ButtonSearch>
        </Container>
    );
}