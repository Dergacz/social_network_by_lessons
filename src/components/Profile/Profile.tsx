import React from "react";
import s from "./Profile..module.css"
import {MyPosts} from "./MyPosts/MyPost";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLW8hgwgOOeMZGdY_pZCsqrEkQotwFCK7NjUOqGiv0yDBRKS-8BlUwQ6Gv3h4ZjeKTFI&usqp=CAU"}/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>


    )
}