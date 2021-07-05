import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormAddMessageType = {
    // name
    newMessageBody: string
}


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

export const AddMessageForm = (props: InjectedFormProps<FormAddMessageType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.textArea}>
                <Field
                    component={"textarea"}
                    name={"newMessageBody"}
                    placeholeder={"Enter your message"}
                />

            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm<FormAddMessageType>({form: "dialogAddMessageForm"})(AddMessageForm)
