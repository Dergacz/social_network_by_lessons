import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsType, DialogsDataType, MessagesDataType} from "../../state/state";
import {addMessageAC, updateNewMessageTextAC} from "../../state/dialogsReducer";


type DialogsPropsType = {
    dialogs: DialogsDataType[]
    messages: MessagesDataType[]
    message: string
    dispatch: (action: ActionsType) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    const addMessage = () => {
            props.dispatch(addMessageAC(props.message));
        }

    const onMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageTextAC(e.currentTarget.value));
    }

    const onKeyAddMessage = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.charCode === 13) {
            props.dispatch(addMessageAC(props.message));
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

