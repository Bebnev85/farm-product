import React from "react";
import About from "../../blocks/about/about";
import Advantages from "../../blocks/advantages/advantages";

function MainPage({ features }) {
    return (
        <main>
            <About />
            <Advantages features = { features } />
        </main>
    )
}

export default MainPage;