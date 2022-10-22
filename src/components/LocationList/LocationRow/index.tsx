import { LocationType } from '../../../types';

import { Container, Name } from './styles';

type LocationRowProps = {
    item: LocationType;
}

export const LocationRow = ({item}: LocationRowProps) => {
    return (
        <Container>
            <Name>{item.name}</Name>
        </Container>
    );
}