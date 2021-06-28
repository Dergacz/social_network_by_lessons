import React from "react";
import {addMessageAC, DialogInitialStateType, updateNewMessageTextAC} from "../../state/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType, store} from "../../state/redux-store";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

const state = store.getState();

type MapStateToPropsType = {
    dialogsPage: DialogInitialStateType
}

type MapDispatchToPropsType = {
    addMessageCallBack: () => void
    updateNewMessageCallBack: (textMessage: string) => void
}

export type DialogPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessageCallBack: () => {
          dispatch(addMessageAC(state.dialogsPage.newMessageText))
        },
        updateNewMessageCallBack: (textMessage: string) => {
            dispatch(updateNewMessageTextAC(textMessage));
        }
    }
}

class DialogsContainer extends React.Component<DialogPropsType, DialogPropsType> {
    render() {
        return (
            <div>
                <Dialogs
                    dialogsPage={this.props.dialogsPage}
                    addMessageCallBack={this.props.addMessageCallBack}
                    updateNewMessageCallBack={this.props.updateNewMessageCallBack}
                />
            </div>
        )
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    // WithAuthRedirect
)(DialogsContainer)