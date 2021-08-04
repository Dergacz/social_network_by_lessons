import React from "react";
import {Header} from "./Header";
import {AuthInitialStateType, logout} from "../../state/authReducer";
import {AppStateType} from "../../state/redux-store";
import {connect} from "react-redux";
import {getData, getIsAuth, getLogin} from "../../selectors/header-selectors";


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
        data: getData(state),
        isAuth: getIsAuth(state),
        login: getLogin(state),
    }
}

export const HeaderContainer = connect<MapStateToPropsType, MapDispatchToProps, {}, AppStateType>(mapStateToProps, {
    logout
})(HeaderComponent);