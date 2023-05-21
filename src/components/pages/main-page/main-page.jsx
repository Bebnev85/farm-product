import React from "react";
import About from "../../blocks/about/about";
import Advantages from "../../blocks/advantages/advantages";

function MainPage({qualityList}) {
    return (
        <main>
            <About />
            <Advantages qualityList = {qualityList} />
        </main>
    )
}

export default MainPage;