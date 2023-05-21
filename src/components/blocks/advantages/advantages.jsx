import React from "react";
import Title from "../../ui/title/title";
import Button from "../../ui/button/button";
import AdvantageCard from "../../ui/advantage-card/advantage-card"
import "./style.css";

function Advantages({qualityList}) {
    return (
        <section className="advantage-list">
            {qualityList?.length > 0 ? (
                <>
                    <Title>Почему фермерские продукты лучше?</Title>
                    <ul className="advantage-list__list">
                        {qualityList.map((quality) => (
                            <li className="advantage-list__itrm" key={quality.id}>
                                <AdvantageCard {...quality} />
                            </li>
                        ))}
                    </ul>
                    <Button minwigth={353}>Купить</Button>
                </>
            ) : null}
        </section>
    )
}

export default Advantages;