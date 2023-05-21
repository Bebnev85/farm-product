import React from "react";
import Feature, {productType} from "../feature/feature";
import Title, { TitleSize } from "../title/title";
import "./style.css";

function AdvantageCard(advantage) {
    let bgColor;
    switch (advantage.productType) {
        case productType.FARM:
            bgColor = "#E1EDCE";
            break;
        case productType.SHOP:
            bgColor = "#F8DDD7";
            break;
        default:
            bgColor = "0";
            break;
    }
    return bgColor ? (
        <div className="advantage-card" style={{backgroundColor: `${bgColor}`}}>
            <header className="adventure-card__header">
                <div 
                    className="advantage-card__ico"
                    style={{
                        backgroundImage: `url(${advantage.ico})`
,                    }}>
                </div>
                <div className="adventure-card__title">
                    <Feature>{advantage.productType}</Feature>
                    <Title size={TitleSize.SMALL}>{advantage.title}</Title>
                </div>
                <p className="advantage-card__text">{advantage.description}</p>
            </header>
        </div>
    ): null
}

export default AdvantageCard;