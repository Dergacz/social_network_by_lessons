import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {RootStateType, state} from "./state/state";

export const renderThree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                dialogsPage={state.dialogsPage}
                profilePage={state.profilePage}

            />
        </React.StrictMode>,
        document.getElementById("root")
    );
}