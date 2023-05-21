import React from "react";
import "./style.css";

export const productType = {
    FARM: "FARM",
    SHOP: "SHOP"
};

function Feature({children}) {
    console.log(children)
    let bgColor;
    let text;
    switch (children) {
        case productType.FARM:
            bgColor = "#88AA4D";
            text = "Фермерские продукты";
            break;
        case productType.SHOP:
            bgColor = "#F75531";
            text = "Магазиннные продукты";
            break;
        default:
            bgColor = "red";
            text = "";
    }
    return (
        <p className="feature-text"
        style = {{backgroundColor: `${bgColor}`}}>
            {text}
        </p>
    );
}

export default Feature;