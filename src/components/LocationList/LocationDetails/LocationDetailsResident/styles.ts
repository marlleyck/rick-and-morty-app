import styled from "styled-components/native";
import { THEME } from "../../../../THEME";

export const Container = styled.View`
    width: 100%;
    height: 80px;

    align-items: center;
    flex-direction: row;

    margin-bottom: 10px;

    
    border: 1px solid gray;
`

export const Text = styled.Text`
    font-family: ${THEME.FONTS.Roboto_300Light};
    color: white;
`

export const Image = styled.Image`
    width: 70px;
    height: 70px;

    margin-right: 10px;
`