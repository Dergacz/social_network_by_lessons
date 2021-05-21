import React from "react";
import s from "./ProfileInfo.module.css"

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLW8hgwgOOeMZGdY_pZCsqrEkQotwFCK7NjUOqGiv0yDBRKS-8BlUwQ6Gv3h4ZjeKTFI&usqp=CAU"}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>

    )
}