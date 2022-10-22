import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { Text } from 'react-native';

import { LocationType } from '../../types';

import { LocationRow } from './LocationRow';



import { Container, FlatList } from './styles';

export const LocationList = () => {
    const {locationList} = useContext(AppContext)

    return (
        <Container>
            <FlatList
            data={locationList}
            keyExtractor={(item: LocationType) => item.id}
            renderItem={({item}: {item: LocationType}) => <LocationRow item={item} />} />

            
        </Container>
    );
}