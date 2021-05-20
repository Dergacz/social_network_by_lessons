import React from "react";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
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
        </div>
    )
}
