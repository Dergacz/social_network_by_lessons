import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPost.module.css"

export const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            My post
            <div>
                new posts
                <div>
                    <Post
                        message={"Hey, how are you?"}
                        likes={15}
                    />
                    <Post
                        message={"It's my first post."}
                        likes={10}
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
