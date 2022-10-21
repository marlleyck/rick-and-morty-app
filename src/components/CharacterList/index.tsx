import { useContext, useEffect } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { LocationType } from '../../types';

import { CharacterRow } from './CharacterRow';

import { Container, FlatList} from './styles';

export const CharacterList = () => {
    const {charactersList} = useContext(AppContext)

    return (
        <Container>
            <FlatList
            data={charactersList}
            keyExtractor={(item: LocationType) => item.id}
            renderItem={({item}: {item: LocationType}) => <CharacterRow item={item} />} />
        </Container>
    );
}