import React from "react";
import "./App.css";
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";



function App() {
    return (
        <BrowserRouter>
            <div className={"app_wrapper"}>
                <HeaderContainer/>
                <NavBar/>
                <div className={"app_wrapper_content"}>
                    <Route path={"/profile/:userId?"}
                           render={() => <ProfileContainer />}/>
                    <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
                    <Route path={"/users"} render={() => <UsersContainer />}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>
                    <Route path={"/login"} render={() => <Login/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
