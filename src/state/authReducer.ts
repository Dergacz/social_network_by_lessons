import {Dispatch} from "redux";
import {headersAPI} from "../Api/api";

const SET_USER_DATA = "SET_USER_DATA";

type SetUserDataType = {
    type: "SET_USER_DATA"
    data: {
        id: number | null
        email: string | null
        login: string | null
    }
}

type ActionsType = SetUserDataType

export type DataType = {
    data: {
        id: number | null
        email: string | null
        login: string | null
    }
    fieldsError: object
    messages: object
    resultCode: number

}

export type AuthInitialStateType = {
    data: {
        id: number | null
        email: string | null
        login: string | null
    }
    isAuth: boolean
}

const initialState: AuthInitialStateType = {
    data: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false
}

export const authReducer = (state: AuthInitialStateType = initialState, action: ActionsType): AuthInitialStateType => {
    switch (action.type) {
        case (SET_USER_DATA): {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }

        default:
            return state;
    }
}

export const setAuthUserData = (data: AuthInitialStateType["data"]): SetUserDataType => {
    return {
        type: SET_USER_DATA,
        data
    }
}
// export const setAuthUserData = (data: {
//                                     id: number | null
//                                     email: string | null
//                                     login: string | null
//                                 }): SetUserDataType => {
//     return {
//         type: SET_USER_DATA,
//         data
//     }
// }

export const showMeThunk = () => {
    return (dispatch: Dispatch) => {
        headersAPI.showMe()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(data));
                }
            })
    }
}


