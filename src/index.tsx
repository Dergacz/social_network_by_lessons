import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {RootStateType, state, subscribe} from "./state/state";
import ReactDOM from "react-dom";
import App from "./App";

let renderThree = () => {
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

renderThree();
subscribe(renderThree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
