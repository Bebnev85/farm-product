import styled from "styled-components";

export const StyledAdvategeCard = styled.div`
    display: flex;
    width: 540px;
    min-height: 197px;
    flex-direction: column;
    gap: 20px;
    padding: 20px;   
    background-color: ${(props) => props.$isNatural ? props.theme.lightGreenBgColor : props.theme.lightRedBgColor}
`;

export const Header = styled.header`
    display: flex;
    gap: 20px;
`;

export const CardTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

export const Paragraph = styled.p`
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.blackColor};
    font-weight: 400;
    line-height: 150%;
    font-size: 18px;
    text-align: left;
`;

export const Image = styled.div`
    width: 56px;
    height: 56px;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.$ico});
`;