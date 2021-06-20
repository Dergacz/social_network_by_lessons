import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPropsType} from "./DialogsContainer";
import { Redirect } from "react-router-dom";


export const Dialogs = (props: DialogPropsType) => {

    const addMessage = () => {
            props.addMessageCallBack();
        }

    const onMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageCallBack(e.currentTarget.value);
    }

    const onKeyAddMessage = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.charCode === 13) {
            props.addMessageCallBack();
        }
    }

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem
        key={d.id}
        id={d.id}
        name={d.name}
    />);

    let messagesElements = props.dialogsPage.messages.map(m => <Message
        key={m.id}
        message={m.message}
    />);

    {if (!props.isAuth) {
        return <Redirect to={"/login"}/>
    } }

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
                    value={props.dialogsPage.newMessageText}
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

