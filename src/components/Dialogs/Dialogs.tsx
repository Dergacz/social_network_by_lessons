import React from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsDataType, MessagesDataType} from "../../state/state";


type DialogsPropsType = {
    dialogs: DialogsDataType[]
    messages: MessagesDataType[]
    addMessage: (textMessage: string) => void
}


export const Dialogs = (props: DialogsPropsType) => {
    const dialogMessageRef = React.createRef<HTMLTextAreaElement>();

    const addMessage = () => {
        if (dialogMessageRef.current) {
            props.addMessage(dialogMessageRef.current.value);
            dialogMessageRef.current.value = "";
        }
    }

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
                <textarea ref={dialogMessageRef}></textarea>
            </div>
            <div>
                <button onClick={() => addMessage()}>add message</button>
            </div>
        </div>
    )
}

