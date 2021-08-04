import {AppStateType} from "../state/redux-store";

export const getData = (state: AppStateType) => {
    return state.auth
}

export const getIsAuth = (state: AppStateType) => {
    return state.auth.isAuth
}

export const getLogin = (state: AppStateType) => {
    return state.auth.login
}

