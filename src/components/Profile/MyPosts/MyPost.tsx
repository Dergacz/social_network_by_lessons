import React, {ChangeEvent, KeyboardEvent} from "react";
import {Post} from "./Post/Post";
import s from "./MyPost.module.css"
import {ProfileInitialStateType} from "../../../state/profileReducer";


export type MyPostPropsType = {
    profilePage: ProfileInitialStateType
    addPostCallBack: () => void
    updateNewPostTextCallBack: (text: string) => void
}

export const MyPosts = (props: MyPostPropsType) => {

    const addPost = () => {
        props.addPostCallBack();
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostTextCallBack(e.currentTarget.value);
    }

    const onKeyAddPost = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.charCode === 13) {
            props.addPostCallBack();
        }
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
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.profilePage.newPostText}
                        onKeyPress={onKeyAddPost}
                    />
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
                <div>
                    {postsElements}
                </div>
            </div>

        </div>
    )
}
