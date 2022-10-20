import { THEME } from './../../THEME';
import styled from "styled-components/native";

export const Container = styled.View`
    width: 80%;
    height: 350px;
    
    align-items: center;
    justify-content: center;
    
    border-radius: 15px;
    
    background-color: ${THEME.COLORS.BACKGROUND_10};
`

export const ContentInfo = styled.View`
    align-items: center;
    flex-direction: column;
`

export const ContentRow = styled.View`
    align-items: center;
    flex-direction: row;
`

export const Titles = styled.Text`
    font-family: ${THEME.FONTS.Roboto_500Medium};
    font-size: 22px;
    color: white;
`

export const Image = styled.Image`
    width: 180px;
    height: 180px;

    border-radius: 20px;
`
    
export const Name = styled.Text`
    font-family: ${THEME.FONTS.Roboto_500Medium};
    font-size: 22px;
    color: white;
`

export const PointStatus = styled.View<{status: string}>`
    width: 10px;
    height: 10px;

    margin-right: 5px;

    border-radius: 50px;
    background-color: ${({status}) => status == 'Alive' ? THEME.COLORS.GREEN : THEME.COLORS.RED};
`

export const Info = styled.Text`
    font-family: ${THEME.FONTS.Roboto_300Light};
    font-size: 22px;
    color: white;
`