import React from "react";
import s from "./Profile..module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostContainer";
import {MapStateToPropsType} from "./ProfileContainer";


export const Profile = (props: MapStateToPropsType & {updateStatus: (status: string) => void}) => {
    return (
        <div className={s.content}>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                isAuth={props.isAuth}
                authorizedUserId={props.authorizedUserId}
            />
            <MyPostsContainer />
        </div>
    )
}