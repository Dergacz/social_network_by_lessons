import {Dispatch} from "redux";
import {headersAPI} from "../Api/api";
import {setAuthUserData} from "./authReducer";

export const showMeThunk = () => {
    return (dispatch: Dispatch) => {
        headersAPI.showMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(response.data));
                }
            })
    }
}

