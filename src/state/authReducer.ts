import {Dispatch} from "redux";
import {authAPI} from "../Api/api";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";

export type AuthInitialStateType = {
    userId: string
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: AuthInitialStateType = {
    userId: "",
    email: null,
    login: null,
    isAuth: false
}

type SetUserDataType = {
    type: typeof SET_USER_DATA
    payload: AuthInitialStateType
}

type ActionsType = SetUserDataType

// export type DataType = {
//     data: {
//         id: number | null
//         email: string | null
//         login: string | null
//     }
//     fieldsError: object
//     messages: object
//     resultCode: number
// }

export const authReducer = (state: AuthInitialStateType = initialState, action: ActionsType): AuthInitialStateType => {
    switch (action.type) {
        case (SET_USER_DATA): {
            return {
                ...state,
                ...action.payload
            }
        }

        default:
            return state;
    }
}

export const setAuthUserData = (userId: string, email: string | null, login: string | null, isAuth: boolean): SetUserDataType => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            email,
            login,
            isAuth
        }
    }
}

export const showMeThunk = () => (dispatch: Dispatch) => {
    return authAPI.showMe()
        .then(response => {
            if (response.resultCode === 0) {
                let {id, login, email} = response.data
                dispatch(setAuthUserData(id, login, email, true));
            }
        })
}


export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Function) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(showMeThunk());
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Common error";
                dispatch(stopSubmit("login", {_error: message}))
            }
        })
}


export const logout = () => (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData("", null, null, false));
            }
        })
}


