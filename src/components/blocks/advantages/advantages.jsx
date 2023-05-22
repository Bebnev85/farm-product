import React from "react";
import AdvantageCard from "../../ui/advantage-card/advantage-card"
import { StyledAdvantages, StyledButton, StyledTitle } from "./style";
import { Ul, Li } from "styled"

function Advantages({features}) {
    return features && features.length ? (
        <StyledAdvantages>
            <StyledTitle as={"h2"}>Почему фермерские продукты лучше?</StyledTitle>
            <Ul $isGridList>
                {features.map((feature) => (
                    <Li key={feature.id}>
                        <AdvantageCard {...feature} />
                    </Li>
                ))}
            </Ul>
            <StyledButton link="/buy">Купить</StyledButton>
        </StyledAdvantages>
    ) : null
}

export default Advantages;