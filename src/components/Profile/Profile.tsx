import React from "react";
import s from "./Profile..module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostContainer";
import {Store} from "redux";

export type ProfilePropsType = {
    store: Store
}

export const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>


    )
}