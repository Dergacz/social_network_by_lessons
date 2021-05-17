import React from "react";
import "./App.css";

function App() {
    return (
        <div className={"app_wrapper"}>
            <header className={"header"}>
                <img src={"https://cdn.logo.com/hotlink-ok/logo-social.png"}/>
            </header>
            <nav className={"nav"}>
                <div>
                    <a href={"#"}>Profile</a>
                </div>
                <div>
                    <a href={"#"}>Messages</a>
                </div>
                <div>
                    <a href={"#"}>News</a>
                </div>
                <div>
                    <a href={"#"}>Music</a>
                </div>
                <div>
                    <a href={"#"}>Settings</a>
                </div>

            </nav>
            <div className={"content"}>

            </div>

        </div>
    );
}

export default App;
