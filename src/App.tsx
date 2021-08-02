import React from "react";
import "./App.css";
import {NavBar} from "./components/NavBar/NavBar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType} from "./state/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";
import {initializeApp} from "./state/appReducer";


class App extends React.Component<AppPropsType, AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <BrowserRouter>
                <div className={"app_wrapper"}>
                    <HeaderContainer/>
                    <NavBar/>
                    <div className={"app_wrapper_content"}>
                        <Route
                            path={"/profile/:userId?"}
                            render={() => <ProfileContainer/>}
                        />
                        <Route
                            path={"/dialogs"}
                            render={() => <DialogsContainer/>}
                        />
                        <Route
                            path={"/users"}
                            render={() => <UsersContainer/>}
                        />
                        <Route
                            path={"/news"}
                            render={() => <News/>}
                        />
                        <Route
                            path={"/music"}
                            render={() => <Music/>}
                        />
                        <Route
                            path={"/settings"}
                            render={() => <Settings/>}
                        />
                        <Route
                            path={"/login"}
                            render={() => <Login/>}
                        />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

type MapStateToPropsType = {
    initialized: boolean
}

type MapDispatchToPropsType = {
    initializeApp: () => void
}

type AppPropsType = MapStateToPropsType & MapDispatchToPropsType

export const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    initialized: state.app.initialized
});

export default compose<React.ComponentType>(
   // withRouter,
connect(mapStateToProps, {initializeApp}))(App)
