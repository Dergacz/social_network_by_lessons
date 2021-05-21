import React from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {

    type DialogsDataType = {
        id: number
        name: string
    }

    const DialogData: DialogsDataType[] = [
        {id: 1, name: "Vasia"},
        {id: 2, name: "Sania"},
        {id: 3, name: "Kirill"},
        {id: 4, name: "Petia"},
    ];

    type MessageDataType = {
        id: number
        message: string
    }

    const MessageData: MessageDataType[] = [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Kak sam?"},
    ]


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={DialogData[0].name} id={DialogData[0].id}/>
                <DialogItem name={DialogData[1].name} id={DialogData[1].id}/>
                <DialogItem name={DialogData[2].name} id={DialogData[2].id}/>
                <DialogItem name={DialogData[3].name} id={DialogData[3].id}/>
            </div>
            <div className={s.messages}>
                <Message message={MessageData[0].message}/>
                <Message message={MessageData[1].message}/>
                <Message message={MessageData[2].message}/>
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

