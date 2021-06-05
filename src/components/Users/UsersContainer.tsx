import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType, store} from "../../state/redux-store";
import {followAC, setUsersAC, unfollowAC, UsersInitialStateType, UsersType} from "../../state/usersReducer";
import {Dispatch} from "redux";

const state = store.getState();

type MapStateToProps = {
    users: UsersInitialStateType
}

type MapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
}

export type UsersPropsType = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        users: state.usersPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        }

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);