import React from "react";
import {Header} from "./Header";
import {AuthInitialStateType, logout} from "../../state/authReducer";
import {AppStateType} from "../../state/redux-store";
import {connect} from "react-redux";
import {showMeThunk} from "../../state/authReducer";


export class HeaderComponent extends React.Component<AuthPropsType> {


    render() {
        return (
            <Header
                login={this.props.login}
                isAuth={this.props.isAuth}
                data={this.props.data}
                logout={this.props.logout}
            />
        )
    }
}

type MapStateToPropsType = {
    data: AuthInitialStateType
    isAuth: boolean
    login: string | null
}


type MapDispatchToProps = {
    logout: () => void
}

export type AuthPropsType = MapStateToPropsType & MapDispatchToProps;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        data: state.auth,
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export const HeaderContainer = connect<MapStateToPropsType, MapDispatchToProps, {}, AppStateType>(mapStateToProps, {
    logout
})(HeaderComponent);