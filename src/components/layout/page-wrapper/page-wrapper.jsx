import React from "react";
import MainPage from "../../pages/main-page/main-page";
import Footer from "../footer/footer";
import Header from "../header/header";

function PageWrapper({...qualityList}) {
    return (
        <>
            <Header />
            <MainPage {...qualityList} />
            <Footer />
        </>
    )
}

export default PageWrapper;