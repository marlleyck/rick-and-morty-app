import styled from "styled-components/native";  
import { THEME } from "../../THEME";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-between;

    background-color: ${THEME.COLORS.BACKGROUND};
`

export const ContainerJumpPages = styled.View`
    width: 100%;
    height: 50px;

    align-items: center;
    justify-content: center;
    flex-direction: row;

    background-color: ${THEME.COLORS.BLACK};
`