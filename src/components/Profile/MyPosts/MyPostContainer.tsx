import React, {ChangeEvent, KeyboardEvent} from "react";
import {Post} from "./Post/Post";
import s from "./MyPost.module.css"
import {ActionsType, MyPostType,} from "../../../state/state";
import {AddPostAC, updateNewPostTextAC} from "../../../state/profileReducer";
import {MyPosts} from "./MyPost";
import {Store} from "redux";
import {StoreContext} from "../../../StoreContext";


export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    const addPost = () => {
                        store.dispatch(AddPostAC(state.profilePage.newPostText))
                    }

                    const onPostChange = (text: string) => {
                        store.dispatch(updateNewPostTextAC(text))
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
            }
        </StoreContext.Consumer>
    )
}
