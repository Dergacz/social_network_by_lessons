import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "./Dialogs.module.css";
import React from "react";
import {Textarea} from "../common/FormsControl/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/Validators";

export type FormAddMessageType = {
    // name
    newMessageBody: string
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props: InjectedFormProps<FormAddMessageType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.textArea}>
                <Field
                    component={Textarea}
                    name={"newMessageBody"}
                    placeholeder={"Enter your message"}
                    validate={[required, maxLength50]}
                />

            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
export const AddMessageFormRedux = reduxForm<FormAddMessageType>({form: "dialogAddMessageForm"})(AddMessageForm)