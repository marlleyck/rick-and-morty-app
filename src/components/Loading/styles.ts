import styled from "styled-components/native";  
import { THEME } from "../../THEME";

export const Container = styled.View`
    align-items: center;
    justify-content: center;
    height: 80%;
    width: 100%;
`

export const Image = styled.Image`
    width: 100px;
    height: 100px;
    margin-top: 50px;
`

export const Text = styled.Text`
    font-family: ${THEME.FONTS.Roboto_500Medium};
    font-size: 20px;
    color: white;
`