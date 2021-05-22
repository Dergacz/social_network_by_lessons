import React from "react";
import s from "./Profile..module.css"
import {MyPosts, MyPostType} from "./MyPosts/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export type ProfilePropsType = {
    myPosts: MyPostType[]
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts myPosts={props.myPosts}/>
        </div>


    )
}