import styled from "styled-components";

export const StyledFeature = styled.p`
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: ${(props) => props.theme.whiteColor};
    padding-left: 10px;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-right: 10px;
    background-color: ${(props) => props.$isNatural ? props.theme.darkGreenBgColor : props.theme.darkRedBgColor};
    width: max-content;
`