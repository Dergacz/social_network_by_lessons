import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPost.module.css"

export const MyPosts = () => {

    type MyPostType = {
        message: string
        likesCount: number
    }

    const myPost: MyPostType[] = [
        {message: "Hey, how are you?", likesCount: 15},
        {message: "It's my first post.", likesCount: 10},
    ];

    let postsElements = myPost.map(p => <Post key={p.likesCount} message={p.message} likes={p.likesCount}/>);

    return (
        <div className={s.myPosts}>
            My post
            <div>
                new posts
                <div>
                    {postsElements}
                </div>
            </div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>add post</button>
            </div>
        </div>
    )
}
