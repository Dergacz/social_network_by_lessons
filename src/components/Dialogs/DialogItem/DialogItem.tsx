import {NavLink} from "react-router-dom";
import s from "./DialogItem.module.css";
import React from "react";

export type DialogItemPropsType = {
    id: number
    name: string
}

export const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div>
            <NavLink
                to={"/dialogs/" + props.id}
                className={s.dialog}
            >
                {props.name}
            </NavLink>
        </div>

    )
}