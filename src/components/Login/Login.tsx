import React from "react";
import {LoginReduxForm} from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../state/authReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../state/redux-store";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export type MapStateToPropsType = {
    isAuth: boolean
}

export type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

export type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType


const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    console.log(props.isAuth)
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default connect(MapStateToProps, {login})(Login)