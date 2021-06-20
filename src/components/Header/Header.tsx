import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"
import {AuthPropsType} from "./HeaderContainer";


export const Header = (props: AuthPropsType) => {
    console.log(props.isAuth)
    return (
        <header className={s.header}>
            <img src={"https://cdn.logo.com/hotlink-ok/logo-social.png"}/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div className={s.name}>{props.login}</div>
                    : <NavLink to={"/login"}>
                        Login
                    </NavLink>
                }
            </div>
        </header>
    )
}