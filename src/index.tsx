import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {MyPostType} from "./components/Profile/MyPosts/MyPost";
import {DialogsDataType, MessagesDataType} from "./components/Dialogs/Dialogs";

const myPosts: MyPostType[] = [
    {message: "Hey, how are you?", likesCount: 15},
    {message: "It's my first post.", likesCount: 10},
];

const dialogs: DialogsDataType[] = [
    {id: 1, name: "Vasia"},
    {id: 2, name: "Sania"},
    {id: 3, name: "Kirill"},
    {id: 4, name: "Petia"},
];

const messages: MessagesDataType[] = [
    {id: 1, message: "Hi!"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Kak sam?"},
];

ReactDOM.render(
  <React.StrictMode>
    <App
        myPosts={myPosts}
        dialogs={dialogs}
        messages={messages}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
