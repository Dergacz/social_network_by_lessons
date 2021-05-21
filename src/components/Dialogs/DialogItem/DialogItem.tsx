import {NavLink} from "react-router-dom";
import s from "./DialogItem.module.css";
import React from "react";

export type DialogItemPropsType = {
    name: string
    id: string
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