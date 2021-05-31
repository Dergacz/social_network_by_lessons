import {ActionsType, AddPostActionType, MyPostType, RootStateType, UpdateNewPostTextActionType} from "./state";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

const initialState = {
    myPosts: [
        {id: 1, message: "Hey, how are you?", likesCount: 15},
        {id: 2, message: "It's my first post.", likesCount: 10},
    ] as MyPostType[],
    newPostText: ""
}

export type ProfileInitialStateType = typeof initialState

export const profileReducer = (state: ProfileInitialStateType = initialState, action: ActionsType): ProfileInitialStateType => {
    debugger;
    switch (action.type) {
        case("ADD_POST"): {
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
            // if (state.newPostText.trim() !== "") {
            //     state.myPosts.push(newPost);
            // }
            // state.newPostText = "";
        }

        case("UPDATE_NEW_POST_TEXT"): {
            const stateCopy = {
                ...state,
                newPostText: action.updatePostMessage
            }
            return stateCopy;
        }
        default:
            return state;
    }
}


export const AddPostAC = (postText: string): AddPostActionType => {
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
