import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPost.module.css"

export const MyPosts = () => {

    type MyPostType = {
        message: string
        likesCount: number
    }

    const MyPostData: MyPostType[] = [
        {message: "Hey, how are you?", likesCount: 15},
        {message: "It's my first post.", likesCount: 10},
    ];

    return (
        <div className={s.myPosts}>
            My post
            <div>
                new posts
                <div>
                    <Post
                        message={MyPostData[0].message}
                        likes={MyPostData[0].likesCount}
                    />
                    <Post
                        message={MyPostData[1].message}
                        likes={MyPostData[1].likesCount}
                    />
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
