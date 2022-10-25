import styled from "styled-components/native";
import { THEME } from "../../../THEME";

export const Container = styled.View`
    width: 100%;
    height: 100%;

    align-items: center;
    justify-content: center;

    background-color: ${THEME.COLORS.BACKGROUND};
`

export const Content = styled.View`
    width: 90%;
    height: 80%;

    align-items: center;
    justify-content: flex-start;

    background-color: ${THEME.COLORS.BACKGROUND_10};
`

export const FlatList = styled.FlatList`
    flex: 1;
    width: 100%;
`

export const ContentInfo = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: row;
`


export const InfoTitle = styled.Text`
    font-family: ${THEME.FONTS.Roboto_500Medium};
    color: white;
`

export const Info = styled.Text`
    font-family: ${THEME.FONTS.Roboto_300Light};
    color: white;
`