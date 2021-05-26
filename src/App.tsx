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
import {addMessage, addPost, DialogsDataType, MessagesDataType, MyPostType, RootStateType} from "./state/state";

export type AppPropsType = {
    myPosts: MyPostType[]
    dialogs: DialogsDataType[]
    messages: MessagesDataType[]
}


function App(props: RootStateType) {



    return (
        <BrowserRouter>
            <div className={"app_wrapper"}>
                <Header/>
                <NavBar/>
                <div className={"app_wrapper_content"}>

                    <Route path={"/profile"} render={() => <Profile
                        myPosts={props.profilePage.myPosts}
                        addPost={addPost}
                    />}/>
                    <Route path={"/dialogs"} render={() => <Dialogs
                        dialogs={props.dialogsPage.dialogs}
                        messages={props.dialogsPage.messages}
                        addMessage={addMessage}
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
