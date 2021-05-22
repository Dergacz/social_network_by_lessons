import React from "react";
import "./App.css";
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs, DialogsDataType, MessagesDataType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {MyPostType} from "./components/Profile/MyPosts/MyPost";


export const myPost: MyPostType[] = [
    {message: "Hey, how are you?", likesCount: 15},
    {message: "It's my first post.", likesCount: 10},
];

export const dialogs: DialogsDataType[] = [
    {id: 1, name: "Vasia"},
    {id: 2, name: "Sania"},
    {id: 3, name: "Kirill"},
    {id: 4, name: "Petia"},
];


export const messages: MessagesDataType[] = [
    {id: 1, message: "Hi!"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Kak sam?"},
];


function App() {
    return (
        <BrowserRouter>
            <div className={"app_wrapper"}>
                <Header/>
                <NavBar/>
                <div className={"app_wrapper_content"}>

                    <Route path={"/profile"} render={() => <Profile/>}/>
                    <Route path={"/dialogs"} render={() => <Dialogs/>}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>

                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
