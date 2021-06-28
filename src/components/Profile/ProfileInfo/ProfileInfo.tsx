import React from "react";
import s from "./ProfileInfo.module.css"
import {Preloader} from "../../common/Preloader/Preloader";
import {MapStateToPropsType} from "../ProfileContainer";
import {EditStatus} from "../../EditStatus/EditStatus";


export const ProfileInfo = (props: MapStateToPropsType & {updateStatus: (status: string) => void}) => {
    if (!props.profile) {
        return (
            <Preloader/>
        )
    }
    return (
        <div>
            <div>
                <EditStatus
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile?.photos?.large}/>
                <div>Name: {props.profile?.fullName}</div>
                <div>{props.profile.lookingForAJob}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
                <div>My contacts:</div>
                <div>{props.profile.contacts?.facebook}</div>
                <div>{props.profile.contacts?.vk}</div>
                <div>{props.profile.contacts?.github}</div>
                <div>{props.profile.contacts?.twitter}</div>
                <div>{props.profile.contacts?.instagram}</div>
                <div>{props.profile.contacts?.mainLink}</div>
                <div>{props.profile.contacts?.website}</div>
                <div>{props.profile.contacts?.youtube}</div>
            </div>
        </div>

    )
}