import React from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={"Vasia"} id={"1"}/>
                <DialogItem name={"Sania"} id={"2"}/>
                <DialogItem name={"Kirill"} id={"3"}/>
                <DialogItem name={"Petia"} id={"4"}/>
            </div>
            <div className={s.messages}>
                <Message message={"Hi!"}/>
                <Message message={"How are you?"}/>
                <Message message={"Kak sam?"}/>
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

