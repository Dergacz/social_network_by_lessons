import React from "react";
import s from "./NavBar.module.css"

export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <a className={s.item} href={"/profile"}>Profile</a>
            </div>
            <div>
                <a className={`${s.item} ${s.active}`} href={"/dialogs"}>Messages</a>
            </div>
            <div>
                <a className={s.item} href={"/news"}>News</a>
            </div>
            <div>
                <a className={s.item} href={"/music"}>Music</a>
            </div>
            <div>
                <a className={s.item} href={"/settings"}>Settings</a>
            </div>

        </nav>
    )
}