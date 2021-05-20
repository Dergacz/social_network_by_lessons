import React from "react";
import s from "./Dialogs.module.css";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Vasia
                </div>
                <div className={s.dialog}>
                    Sania
                </div>
                <div className={s.dialog}>
                    Kirill
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Kak sam?</div>
            </div>
        </div>
    )
}