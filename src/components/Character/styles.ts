import { THEME } from './../../THEME';
import styled from "styled-components/native";

export const Container = styled.View`
    width: 80%;
    height: 200px;
    
    align-items: center;
    
    border-radius: 15px;
    
    background-color: ${THEME.COLORS.BACKGROUND_10};
`

export const Name = styled.Text`
    font-family: ${THEME.FONTS.Roboto_500Medium};
    color: white;
`