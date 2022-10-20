import { useContext } from 'react';

import { AppContext } from '../../contexts/AppContext';

import { Container, Name } from './styles';

export const Character = () => {
    const {character} = useContext(AppContext)
    
    return (
        <Container>
            <Name>{character?.name}</Name>
        </Container>
    );
}