import React from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {

    type DialogsDataType = {
        id: number
        name: string
    }

    const dialogs: DialogsDataType[] = [
        {id: 1, name: "Vasia"},
        {id: 2, name: "Sania"},
        {id: 3, name: "Kirill"},
        {id: 4, name: "Petia"},
    ];

    type MessagesDataType = {
        id: number
        message: string
    }

    const messages: MessagesDataType[] = [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Kak sam?"},
    ];

    let dialogsElements = dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>);
    let messagesElements = messages.map(m => <Message key={m.id} message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.textArea}>
                <textarea></textarea>
            </div>
            <div>
                <button>add message</button>
            </div>
        </div>
    )
}

