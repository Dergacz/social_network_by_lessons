import React from "react";
import s from "./Post.module.css"

export const Post = () => {
    return (
        <div>
            <div>
                <img className={s.photo} src={"https://static.probusiness.io/720x480c/n/03/d/38097027_439276526579800_2735888197547458560_n.jpg"}/>
            </div>
            <div>
                post 1
            </div>
            <div>
                <span>like</span>
            </div>
        </div>
    )
}