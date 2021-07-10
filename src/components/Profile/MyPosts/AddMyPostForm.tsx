import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "./MyPost.module.css";
import React from "react";
import {maxLengthCreator, required} from "../../../utils/validators/Validators";
import {Textarea} from "../../common/FormsControl/FormsControls";

export type FormAddMyPostType = {
    newPostBody: string
}

const maxLength30 = maxLengthCreator(30);

export const AddMyPostForm = (props: InjectedFormProps<FormAddMyPostType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.textArea}>
                <Field
                    component={Textarea}
                    name={"newPostBody"}
                    placeholeder={"Enter your post"}
                        validate={[required, maxLength30]}

                />

            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
export const AddMyPostFormRedux = reduxForm<FormAddMyPostType>({form: "profileAddMyPostForm"})(AddMyPostForm)