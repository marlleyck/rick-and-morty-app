import styled from "styled-components/native";
import { THEME } from "../../../THEME";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;

    background-color: ${THEME.COLORS.BACKGROUND_10};
`

export const Name = styled.Text`
    font-family: ${THEME.FONTS.Roboto_300Light};
    font-size: 16px;
    color: white;
`