import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsType, DialogsDataType, MessagesDataType} from "../../state/state";
import {addMessageAC, updateNewMessageTextAC} from "../../state/dialogsReducer";
import {Store} from "redux";
import {Dialogs} from "./Dialogs";


type DialogsContainerPropsType = {
    store: Store
}

export const DialogsContainer = (props: DialogsContainerPropsType) => {
    let state = props.store.getState();

    const addMessage = () => {
        props.store.dispatch(addMessageAC(state.dialogsPage.newMessageText));
    }

    const onMessageText = (messageText: string) => {
        props.store.dispatch(updateNewMessageTextAC(messageText));
    }


    return (
        <Dialogs
            addMessageCallBack={addMessage}
            updateNewMessageCallBack={onMessageText}
            message={state.dialogsPage.newMessageText}
            dialogs={state.dialogsPage.dialogs}
            messages={state.dialogsPage.messages}
        />
    )
}

