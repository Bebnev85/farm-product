import React from "react";
import { StyledFeature } from "./style";

export const ownerText = {
    FARM: "Фермерские продукты",
    SHOP: "Магазиннные продукты"
};

function Feature({isNatural}) {
    const text = isNatural ? ownerText.FARM : ownerText.SHOP;
    return (
        <StyledFeature $isNatural = { isNatural }>
            {text}
        </StyledFeature>
    )
}

export default Feature;