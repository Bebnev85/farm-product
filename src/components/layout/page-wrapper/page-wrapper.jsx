import React from "react";
import MainPage from "../../pages/main-page/main-page";
import Footer from "../footer/footer";
import Header from "../header/header";

function PageWrapper({children, features}) {
    return (
        <>
            <Header />
            <MainPage features = {features} />
            <Footer />
        </>
    )
}

export default PageWrapper;