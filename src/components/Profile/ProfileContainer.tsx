import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../state/redux-store";
import {getStatusThunk, ProfileType, showProfileUserThunk, updateStatus,} from "../../state/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

export type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: string
    isAuth: boolean
}

type MapDispatchToPropsType = {
    showProfileUserThunk: (userId: string) => void
    getStatusThunk: (userId: string) => void
    updateStatus: (status: string) => void
}

type PathParamType = {
    userId: string
}

export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

type PropsType = RouteComponentProps<PathParamType> & ProfileContainerPropsType;

class ProfileContainer extends React.Component<PropsType, PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
        }
        this.props.showProfileUserThunk(userId);
        this.props.getStatusThunk(userId)
    }

    render() {
        return (
            <div>
                <Profile
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    authorizedUserId={this.props.authorizedUserId}
                    isAuth={this.props.isAuth}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth

    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        showProfileUserThunk,
        getStatusThunk,
        updateStatus
    }),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)