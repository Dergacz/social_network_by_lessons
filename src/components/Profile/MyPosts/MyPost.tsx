import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPost.module.css"
import {myPost} from "../../../App";


export type MyPostType = {
    message: string
    likesCount: number
}

export const MyPosts = () => {

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
