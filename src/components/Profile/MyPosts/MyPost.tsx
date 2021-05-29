import React, {ChangeEvent, KeyboardEvent} from "react";
import {Post} from "./Post/Post";
import s from "./MyPost.module.css"
import {ActionsType, MyPostType} from "../../../state/state";


export type MyPostPropsType = {
    myPosts: MyPostType[]
    message: string
    dispatch: (action: ActionsType) => void
}

export const MyPosts = (props: MyPostPropsType) => {

    const addPost = () => {
        props.dispatch({type: "ADD_POST", postText: props.message});
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: "UPDATE_NEW_POST_TEXT", updatePostMessage: e.currentTarget.value});
    }

    const onKeyAddPost = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.charCode === 13) {
            props.dispatch({type: "ADD_POST", postText: props.message});
        }
    }

    let postsElements = props.myPosts.map(p => <Post
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
                        value={props.message}
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
