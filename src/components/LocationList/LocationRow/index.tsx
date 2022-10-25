import { useNavigation } from '@react-navigation/native';
import { LocationType } from '../../../types';


import { Container, Name } from './styles';
import { PropsStack } from '../../../routes/Models';
import { useState } from 'react';

type LocationRowProps = {
    item: LocationType;
}

export const LocationRow = ({item}: LocationRowProps) => {
    const navigation = useNavigation<PropsStack>()
    const [itemPressed, setItemPressed] = useState<LocationType>(item)

    const handlePress = (e: any) => {
        setItemPressed(item)
        navigation.navigate('LocationDetails', {itemPressed})
    }

    return (
        <Container onPress={handlePress}>
            <Name>{item.name}</Name>
        </Container>
    );
}