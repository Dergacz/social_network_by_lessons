import React from "react";
import s from "./ProfileInfo.module.css"
import {ProfileType} from "../../../state/profileReducer";
import {Preloader} from "../../common/Preloader/Preloader";
import {MapStateToPropsType} from "../ProfileContainer";



export const ProfileInfo = (props: MapStateToPropsType) => {
    if (!props.profile) {
        return (
            <Preloader/>
        )
    }
    return (
        <div>
            <div>
                <img
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLW8hgwgOOeMZGdY_pZCsqrEkQotwFCK7NjUOqGiv0yDBRKS-8BlUwQ6Gv3h4ZjeKTFI&usqp=CAU"}/>
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