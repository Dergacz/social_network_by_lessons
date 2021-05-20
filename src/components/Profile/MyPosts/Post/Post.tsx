import React from "react";
import s from "./Post.module.css"

export type PostPropsType = {
    message: string
    likes: number
}

export const Post = (props: PostPropsType) => {
    return (
        <div>
            <div>
                <img className={s.photo}
                     src={"https://static.probusiness.io/720x480c/n/03/d/38097027_439276526579800_2735888197547458560_n.jpg"}/>
                {props.message}
            </div>

            <div>
                <span>{props.likes}</span>
            </div>
        </div>
    )
}