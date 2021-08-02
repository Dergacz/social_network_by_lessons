import {Dispatch} from "redux";
import {showMeThunk} from "./authReducer";

const INITIAL_SUCCESS = "INITIAL_SUCCESS";

type AppInitialStateType = {
    initialized: boolean
}

export const initialState: AppInitialStateType = {
    initialized: false
}

type InitialSuccessActionType = {
    type: "INITIAL_SUCCESS"
}

type ActionType = InitialSuccessActionType

export const appReducer = (state: AppInitialStateType = initialState, action: ActionType): AppInitialStateType => {
    switch (action.type) {
        case INITIAL_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default: {
            return state
        }
    }
}

export const initializedSuccess = (): InitialSuccessActionType => ({
    type: INITIAL_SUCCESS
})

export const initializeApp = () => (dispatch: Dispatch<any>) => {
    let promise = dispatch(showMeThunk())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}