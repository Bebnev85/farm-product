import React from "react";
import Feature from "../feature/feature";
import Title, { TitleSize } from "../title/title";
import { StyledAdvategeCard, Header, CardTitle, Paragraph, Image } from "./style";

function AdvantageCard({isNatural, ico, title, description}) {
    return (
        <StyledAdvategeCard $isNatural = {isNatural}>
            <Header>
                <Image $ico = {ico}/>
                <CardTitle>
                    <Feature isNatural = {isNatural}></Feature>
                    <Title as="h3" size={TitleSize.EXTRA_SMALL}>{title}</Title>
                </CardTitle>
            </Header>
            <Paragraph>{description}</Paragraph>
        </StyledAdvategeCard>
    )
}

export default AdvantageCard;