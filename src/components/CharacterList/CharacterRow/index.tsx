import { LocationType } from '../../../types';

import { Container, Name } from './styles';

type CharacterRowProps = {
    item: LocationType;
}

export const CharacterRow = ({item}: CharacterRowProps) => {
    return (
        <Container>
            <Name>{item.name}</Name>
        </Container>
    );
}