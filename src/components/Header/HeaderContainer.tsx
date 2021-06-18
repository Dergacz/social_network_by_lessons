import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {AuthInitialStateType, DataType, setAuthUserData} from "../../state/authReducer";
import {AppStateType} from "../../state/redux-store";
import {connect} from "react-redux";


export class HeaderComponent extends React.Component<AuthPropsType>{
    componentDidMount() {
        // types any
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data);
                }
            })
    }

    render () {
        return (
            <Header
                login={this.props.login}
                isAuth={this.props.isAuth}
                data={this.props.data}
                setAuthUserData={this.props.setAuthUserData}
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
    // types any
    setAuthUserData: (data: DataType[]) => void
}

export type AuthPropsType = MapStateToPropsType & MapDispatchToProps;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        data: state.auth,
        isAuth: state.auth.isAuth,
        login: state.auth.data.login,
    }
}

export const HeaderContainer = connect<MapStateToPropsType, MapDispatchToProps, {}, AppStateType>(mapStateToProps, {setAuthUserData})(HeaderComponent);