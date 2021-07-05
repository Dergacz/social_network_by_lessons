import React from "react";
import {addPostAC, ProfileInitialStateType} from "../../../state/profileReducer";
import {MyPosts} from "./MyPost";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStateType, store} from "../../../state/redux-store";


const state = store.getState();

type MapStateToPropsType = {
    profilePage: ProfileInitialStateType
}

type MapDispatchToPropsType = {
    addPostCallBack: (newPostBody: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPostCallBack: (newPostBody: string) => {
            dispatch(addPostAC(newPostBody));
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)