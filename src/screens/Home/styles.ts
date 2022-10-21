import styled from "styled-components/native";
import { THEME } from "../../THEME";

export const Container = styled.Pressable`
    flex: 1;

    align-items: center;
    justify-content: space-between;


    padding: 50px 0;

    background-color: ${THEME.COLORS.BACKGROUND};
`

/* export const Content = styled.View`
    width: 100%;
    align-items: center;

    margin-top: 150px;
    margin-bottom: 50px;
` */

export const Title = styled.Text`
    font-family: ${THEME.FONTS.Roboto_700Bold};
    font-size: 50px;
    text-align: center;
    color: white;
`

export const Rick = styled.Text`
    font-family: ${THEME.FONTS.Roboto_700Bold};
    font-size: 50px;
    color: ${THEME.COLORS.GREEN_RICK};
`

export const Morty = styled.Text`
    font-family: ${THEME.FONTS.Roboto_700Bold};
    font-size: 50px;
    color: ${THEME.COLORS.YELLOW_MORTY};
`