import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsDataType, MessagesDataType} from "../../state/state";


type DialogsPropsType = {
    dialogs: DialogsDataType[]
    messages: MessagesDataType[]
    addMessage: () => void
    newMessageText: (message: string) => void
    message: string
}


export const Dialogs = (props: DialogsPropsType) => {

    const addMessage = () => {
            props.addMessage();
        }

    const onMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.newMessageText(e.currentTarget.value)
    }

    const onKeyAddMessage = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.charCode === 13) {
            props.addMessage();
        }
    }

    let dialogsElements = props.dialogs.map(d => <DialogItem
        key={d.id}
        id={d.id}
        name={d.name}
    />);

    let messagesElements = props.messages.map(m => <Message
        key={m.id}
        message={m.message}
    />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.textArea}>
                <textarea
                    value={props.message}
                    onChange={onMessageText}
                    onKeyPress={onKeyAddMessage}
                />
            </div>
            <div>
                <button onClick={() => addMessage()}>add message</button>
            </div>
        </div>
    )
}

