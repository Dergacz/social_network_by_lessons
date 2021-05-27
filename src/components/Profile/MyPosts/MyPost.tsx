import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import s from "./MyPost.module.css"
import {MyPostType} from "../../../state/state";


export type MyPostPropsType = {
    myPosts: MyPostType[]
    addPost: () => void
    newPostText: (text: string) => void
    message: string
}

export const MyPosts = (props: MyPostPropsType) => {

    const addPost = () => {
            props.addPost();
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.newPostText(e.currentTarget.value);
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
