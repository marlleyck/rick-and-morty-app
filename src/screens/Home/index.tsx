import { Keyboard, StatusBar } from "react-native";

import { SearchArea } from "../../components/SearchArea";
import { Character } from "../../components/Character";

import { Container, Title, Rick, Morty } from "./styles";

export const Home = () => {
    return (
        <Container
        onPress={() => Keyboard.dismiss()}>
            <Title>
                <Rick>Rick</Rick> and <Morty>Morty</Morty> Library
            </Title>
            <Character />
            <SearchArea />

        <StatusBar backgroundColor='black' barStyle='light-content' />
        </Container>
    );
}