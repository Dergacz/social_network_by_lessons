import {Dispatch} from "redux";
import {profileAPI} from "../Api/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

type AddPostActionType = {
    type: "ADD_POST"
    postText: string
}

type UpdateNewPostTextActionType = {
    type: "UPDATE_NEW_POST_TEXT"
    updatePostMessage: string
}

type SetUserProfileActionType = {
    type: "SET_USER_PROFILE"
    profile: ProfileType | null
}

type SetStatusActionType = {
    type: "SET_STATUS",
    status: string
}

type ActionsType = AddPostActionType | UpdateNewPostTextActionType | SetUserProfileActionType | SetStatusActionType;

export type MyPostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePagePropsType = {
    myPosts: MyPostType[]
    newPostText: string
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }


}

const initialState = {
    myPosts: [
        {id: 1, message: "Hey, how are you?", likesCount: 15},
        {id: 2, message: "It's my first post.", likesCount: 10},
    ] as MyPostType[],
    newPostText: "",
    profile: null as ProfileType | null,
    status: ""
}

export type ProfileInitialStateType = typeof initialState

export const profileReducer = (state: ProfileInitialStateType = initialState, action: ActionsType): ProfileInitialStateType => {
    switch (action.type) {
        case(ADD_POST): {
            const newPost: MyPostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            };
            const stateCopy = {
                ...state,
                newPostText: "",
                myPosts: [...state.myPosts, newPost]
            }
            return stateCopy;
        }

        case(UPDATE_NEW_POST_TEXT): {
            const stateCopy = {
                ...state,
                newPostText: action.updatePostMessage
            }
            return stateCopy;
        }
        case (SET_USER_PROFILE): {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const addPostAC = (postText: string): AddPostActionType => {
    return {
        type: ADD_POST,
        postText
    }
}

export const updateNewPostTextAC = (updatePostMessage: string): UpdateNewPostTextActionType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        updatePostMessage
    }
}

export const setUserProfile = (profile: ProfileType | null): SetUserProfileActionType => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const setStatus = (status: string): SetStatusActionType => {
    return {
        type: SET_STATUS,
        status
    }
}

export const showProfileUserThunk = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.showProfileUser(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            })
    }
}

export const getStatusThunk = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data));
            })
    }
}

export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if (data.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }

            })
    }
}
