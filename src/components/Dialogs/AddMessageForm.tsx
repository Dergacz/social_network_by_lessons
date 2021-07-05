import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "./Dialogs.module.css";
import React from "react";

export type FormAddMessageType = {
    // name
    newMessageBody: string
}


const AddMessageForm = (props: InjectedFormProps<FormAddMessageType>) => {
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