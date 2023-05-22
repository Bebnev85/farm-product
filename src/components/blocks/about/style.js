import styled from "styled-components";
import { Section } from "styled";
import imageAbout from "../../../assets/about.svg";


const Paragraph = styled.p`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;

export const StyledSection = styled(Section)`
    background-color: ${(props) => props.theme.bgForAbout};
    display: flex;
    justify-content: center;
    min-height: 600px;
    padding-top: 0;
    padding-bottom: 0;
`;

export const Container = styled.div`
    width: 1280px;
    position: relative;
    padding-left: ${(props) => props.theme.pagePadding};
    padding-top: 183px;
    padding-bottom: 183px;
    padding-right: 652px;
    box-sizing: border-box;
    z-index: 1;


    &::after {
        position: absolute;
        display: block;
        content: "";
        top: 76px;
        right: 90px;
        border-radius: 50%;
        width: 446px;
        height: 447px;
        background-color: #C4E2FF;
    }

    &::before {
        position: absolute;
        top: 57px;
        left: 830px;
        display: block;
        content: "";
        width: 276px;
        height: 607px;
        margin: auto;
        background-image: url(${imageAbout});
        background-repeat: no-repeat;
        z-index: 2;
    }
`

export const TextWrapper = styled.div`
    position: relative;
    min-width: 637px;
    z-index: 3;
`;

export const Text = styled(Paragraph)`
    margin-top: ${(props) => props.theme.indent};
    padding-right: 122px;
`;

