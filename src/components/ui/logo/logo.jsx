import React from "react";
import {ReactComponent as LogoImage} from "../../../assets/logo.cmp.svg";
import {StyledLogo, LogoText } from "./style";

function Logo() {
    return (
        <StyledLogo href="/">
            <LogoImage />
            <LogoText>Фермерские продукты</LogoText>
        </StyledLogo>
    )
}

export default Logo;