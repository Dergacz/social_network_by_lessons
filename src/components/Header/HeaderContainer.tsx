import React from "react";
import {Header} from "./Header";
import {AuthInitialStateType} from "../../state/authReducer";
import {AppStateType} from "../../state/redux-store";
import {connect} from "react-redux";
import {showMeThunk} from "../../state/headerReducer";


export class HeaderComponent extends React.Component<AuthPropsType> {
    componentDidMount() {
        this.props.showMeThunk()
    }

    render() {
        return (
            <Header
                login={this.props.login}
                isAuth={this.props.isAuth}
                data={this.props.data}
                showMeThunk={this.props.showMeThunk}
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
    showMeThunk: () => void
}

export type AuthPropsType = MapStateToPropsType & MapDispatchToProps;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        data: state.auth,
        isAuth: state.auth.isAuth,
        login: state.auth.data.login,
    }
}

export const HeaderContainer = connect<MapStateToPropsType, MapDispatchToProps, {}, AppStateType>(mapStateToProps, {
    showMeThunk,

})(HeaderComponent);