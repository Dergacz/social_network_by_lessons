import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPost.module.css"
import {ProfileInitialStateType} from "../../../state/profileReducer";
import {AddMyPostFormRedux, FormAddMyPostType} from "./AddMyPostForm";


export type MyPostPropsType = {
    profilePage: ProfileInitialStateType
    addPostCallBack: (value: string) => void
}

export const MyPosts = (props: MyPostPropsType) => {

    const addPost = (value: FormAddMyPostType) => {
        props.addPostCallBack(value.newPostBody);
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
                <AddMyPostFormRedux onSubmit={addPost}/>
                <div>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}


