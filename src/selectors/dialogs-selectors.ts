import {AppStateType} from "../state/redux-store";

export const getDialogsPage = (state: AppStateType) => {
    return state.dialogsPage
}