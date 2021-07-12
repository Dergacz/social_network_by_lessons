import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"
import {AuthPropsType} from "./HeaderContainer";


export const Header = (props: AuthPropsType) => {
    return (
        <header className={s.header}>
            <img alt={"logo"} src={"https://cdn.logo.com/hotlink-ok/logo-social.png"}/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div className={s.name}>
                        {props.login === "Stasik"
                        || props.login === "sats96dergach@gmail.com"
                            ? <div>Stainslav Dergach</div>
                            : props.login}
                         <button onClick={props.logout}>Exit</button>
                    </div>
                    : <NavLink to={"/login"}>
                        Login
                    </NavLink>
                }
            </div>
        </header>
    )
}
