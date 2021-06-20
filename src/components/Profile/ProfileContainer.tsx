import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../state/redux-store";
import {ProfileType, showProfileUserThunk} from "../../state/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

export type MapStateToPropsType = {
    profile: ProfileType | null
}

type MapDispatchToPropsType = {
    showProfileUserThunk: (userId: string) => void
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
            userId = "14367"
        }
        this.props.showProfileUserThunk(userId);
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    }
}

export let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    showProfileUserThunk,
})(WithUrlDataContainerComponent);