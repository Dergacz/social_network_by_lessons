import React from "react";
import "./App.css";
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs, DialogsDataType, DialogsPropsType, MessagesDataType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {MyPostType} from "./components/Profile/MyPosts/MyPost";

export type AppPropsType = {
    myPosts: MyPostType[]
    dialogs: DialogsDataType[]
    messages: MessagesDataType[]
}


function App(props: AppPropsType) {



    return (
        <BrowserRouter>
            <div className={"app_wrapper"}>
                <Header/>
                <NavBar/>
                <div className={"app_wrapper_content"}>

                    <Route path={"/profile"} render={() => <Profile myPosts={props.myPosts}/>}/>
                    <Route path={"/dialogs"} render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>

                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
