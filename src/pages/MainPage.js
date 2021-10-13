import React from "react";
import "../styles/mainPage.scss";
const MainPage = () => {
    return (
        <div id="main-page">
            <nav>
                <span>This is just for testing</span>
                <a href="/payment">payment</a>
                <a href="/reciept">reciept</a>
            </nav>
            <div>
                <a href="/payment" className="primary-btn">
                    Payment
                </a>
            </div>
        </div>
    );
};
export default MainPage;
