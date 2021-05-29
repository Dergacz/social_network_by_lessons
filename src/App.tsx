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

export type AppPropsType = {
    store: StoreType
}


function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className={"app_wrapper"}>
                <Header/>
                <NavBar/>
                <div className={"app_wrapper_content"}>

                    <Route path={"/profile"} render={() => <Profile
                        myPosts={props.store.getState().profilePage.myPosts}
                        dispatch={props.store.dispatch.bind(props.store)}
                        message={props.store.getState().profilePage.newPostText}
                    />}/>
                    <Route path={"/dialogs"} render={() => <Dialogs
                        dialogs={props.store.getState().dialogsPage.dialogs}
                        messages={props.store.getState().dialogsPage.messages}
                        dispatch={props.store.dispatch.bind(props.store)}
                        message={props.store.getState().dialogsPage.newMessageText}
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
