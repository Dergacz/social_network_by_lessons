import React from "react";
import "./App.css";
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StoreType} from "./state/state";
import {Store} from "redux";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

export type AppPropsType = {
    store: Store
}


function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={"app_wrapper"}>
                <Header/>
                <NavBar/>
                <div className={"app_wrapper_content"}>

                    <Route path={"/profile"} render={() => <Profile
                        store={props.store}
                    />}/>
                    <Route path={"/dialogs"} render={() => <DialogsContainer
                        store={props.store}
                    />}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
