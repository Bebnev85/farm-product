import styled from "styled-components";

export const StyledFooter = styled.footer`
    width: 1280px;
    display: flex;
    padding-top: 0;
    padding-bottom: 0;
    height: 80px;
    background-color: #ffffff;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding-left: ${(props) => props.theme.pagePadding};
    padding-right: ${(props) => props.theme.pagePadding};
    box-sizing: border-box;
`

export const Copyright = styled.span`
    min-height: 43px;
    min-width: 148px;
    max-width: 700px;
    padding: 8px 12px;
    font-size: 18px;
    border-radius: 5px;
    vertical-align: middle;
    text-align: center;
    box-sizing: border-box;
    color: ${(props) => props.theme.blackColor}
`