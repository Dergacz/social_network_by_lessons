import React from "react";
import s from "./NavBar.module.css"

export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <a className={s.item} href={"#"}>Profile</a>
            </div>
            <div>
                <a className={`${s.item} ${s.active}`} href={"#"}>Messages</a>
            </div>
            <div>
                <a className={s.item} href={"#"}>News</a>
            </div>
            <div>
                <a className={s.item} href={"#"}>Music</a>
            </div>
            <div>
                <a className={s.item} href={"#"}>Settings</a>
            </div>

        </nav>
    )
}