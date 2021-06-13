import React from "react";
import s from "./Preloader.module.css";
import preloader from "./../../../img/preloder.gif";


export const Preloader = () => {
    return (
        <div>
            <img
                className={s.preloader}
                src={preloader}
                alt={"preloader"}
            />
        </div>
    )
}