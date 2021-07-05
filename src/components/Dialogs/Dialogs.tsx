import React from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPropsType} from "./DialogsContainer";
import {AddMessageFormRedux, FormAddMessageType} from "./AddMessageForm";


export const Dialogs = (props: DialogPropsType) => {

    const addMessage = (value: FormAddMessageType) => {
            props.addMessageCallBack(value.newMessageBody)
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

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddMessageFormRedux
                onSubmit={addMessage}

            />
        </div>
    )
}

