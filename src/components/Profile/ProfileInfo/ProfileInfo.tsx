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
                ava + description
            </div>
        </div>

    )
}