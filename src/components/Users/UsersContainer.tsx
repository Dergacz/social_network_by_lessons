import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../state/redux-store";
import {
    followThunk,
    requestUsers,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollowThunk,
    UsersInitialStateType,
    UsersType
} from "../../state/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../selectors/users-selectors";

export class UsersComponent extends React.Component<UsersPropsType, UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    render() {

        return (
            <div>
                {this.props.isFetching ? <Preloader/> : ""}
                <Users
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    setUsers={this.props.setUsers}
                    setCurrentPage={this.props.setCurrentPage}
                    setTotalUsersCount={this.props.setTotalUsersCount}
                    isFetching={this.props.isFetching}
                    toggleIsFetching={this.props.toggleIsFetching}
                    followingInProgress={this.props.followingInProgress}
                    getUsers={this.props.getUsers}
                    unfollowThunk={this.props.unfollowThunk}
                    followThunk={this.props.followThunk}
                />
            </div>
        )
    }
}

type MapStateToProps = {
    users: UsersInitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

type MapDispatchToProps = {
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    getUsers: (currentPage: number, pageSize: number) => void
    unfollowThunk: (userId: number) => void
    followThunk: (userId: number) => void
}

export type UsersPropsType = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        unfollowThunk,
        followThunk,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        getUsers: requestUsers,
    })
)(UsersComponent)