import React from "react";
import "./App.css";
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


function App() {
    return (
        <BrowserRouter>
            <div className={"app_wrapper"}>
                <Header/>
                <NavBar/>
                <div className={"app_wrapper_content"}>

                    <Route path={"/profile"} render={() => <Profile/>}/>
                    <Route path={"/dialogs"} render={() => <DialogsContainer />}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
