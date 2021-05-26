import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPost.module.css"
import {MyPostType} from "../../../state/state";


export type MyPostPropsType = {
    myPosts: MyPostType[]
}

export const MyPosts = (props: MyPostPropsType) => {
    const postMessageRef = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        alert(postMessageRef.current?.value)
    }

    let postsElements = props.myPosts.map(p => <Post key={p.likesCount} message={p.message} likes={p.likesCount}/>);

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
                <textarea ref={postMessageRef}></textarea>
            </div>
            <div>
                <button onClick={() => addPost()}>add post</button>
            </div>
        </div>
    )
}
