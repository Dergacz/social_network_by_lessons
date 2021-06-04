import React from "react";
import {addPostAC, ProfileInitialStateType, updateNewPostTextAC} from "../../../state/profileReducer";
import {MyPosts} from "./MyPost";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStateType, store} from "../../../state/redux-store";


const state = store.getState();

type MapStateToPropsType = {
    profilePage: ProfileInitialStateType
}

type MapDispatchToPropsType = {
    addPostCallBack: () => void
    updateNewPostTextCallBack: (text: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPostCallBack: () => {
            dispatch(addPostAC(state.profilePage.newPostText));
        },
        updateNewPostTextCallBack: (text) => {
            dispatch(updateNewPostTextAC(text));
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)