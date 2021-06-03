import React, {ChangeEvent, KeyboardEvent} from "react";
import {Post} from "./Post/Post";
import s from "./MyPost.module.css"
import {ActionsType, MyPostType,} from "../../../state/state";
import {AddPostAC, updateNewPostTextAC} from "../../../state/profileReducer";
import {MyPosts} from "./MyPost";
import {Store} from "redux";


export type MyPostContainerPropsType = {
    store: Store
}

export const MyPostsContainer = (props: MyPostContainerPropsType) => {
    let state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(AddPostAC(state.profilePage.newPostText))
    }

    const onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }

    return (
        <MyPosts
            addPostCallBack={addPost}
            updateNewPostTextCallBack={onPostChange}
            message={state.profilePage.newPostText}
            myPosts={state.profilePage.myPosts}
        />
    )
}
