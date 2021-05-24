import React from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "../../state/state";





export const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>);
    let messagesElements = props.messages.map(m => <Message key={m.id} message={m.message}/>);

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

