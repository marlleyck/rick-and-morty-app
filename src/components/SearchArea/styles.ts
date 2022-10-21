import styled from "styled-components/native";
import { THEME } from "../../THEME";

export const Container = styled.View`
    width: 100%;

    padding: 0 30px;
    margin-bottom: -30px;

    align-items: center;
    justify-content: center;
    flex-direction: row;
`

export const TextInput = styled.TextInput`
    width: 80%;
    height: 50px;

    padding: 10px;
    border-radius: 15px;

    background-color: white;
`

export const Text = styled.Text`
    color: white;
    font-family: ${THEME.FONTS.Roboto_500Medium};
`

export const ButtonSearch = styled.TouchableOpacity`
    margin-left: 5px;
    
    padding: 15px;
    border-radius: 15px;
    background-color: ${THEME.COLORS.PURPLE};
`