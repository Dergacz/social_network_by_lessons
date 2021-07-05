import React, {ChangeEvent, KeyboardEvent} from "react";
import {Post} from "./Post/Post";
import s from "./MyPost.module.css"
import {ProfileInitialStateType} from "../../../state/profileReducer";
import  {Field, InjectedFormProps, reduxForm} from "redux-form";


export type MyPostPropsType = {
    profilePage: ProfileInitialStateType
    addPostCallBack: (value: string) => void
}

type FormAddMyPostType = {
    newPostBody: string
}

export const MyPosts = (props: MyPostPropsType) => {

    const addPost = (value: FormAddMyPostType) => {
        props.addPostCallBack(value.newPostBody);
    }

    let postsElements = props.profilePage.myPosts.map((p) => <Post
        key={p.id}
        message={p.message}
        likes={p.likesCount}
    />);

    return (
        <div className={s.myPosts}>
            My post
            <div>
                new posts
                <AddMyPostFormRedux onSubmit={addPost}/>
                <div>
                    {postsElements}
                </div>
            </div>
        </div>
    )
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