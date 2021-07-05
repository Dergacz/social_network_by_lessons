import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "./MyPost.module.css";
import React from "react";

export type FormAddMyPostType = {
    newPostBody: string
}
export const AddMyPostForm = (props: InjectedFormProps<FormAddMyPostType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.textArea}>
                <Field
                    component={"textarea"}
                    name={"newPostBody"}
                    placeholeder={"Enter your post"}
                />

            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
export const AddMyPostFormRedux = reduxForm<FormAddMyPostType>({form: "profileAddMyPostForm"})(AddMyPostForm)