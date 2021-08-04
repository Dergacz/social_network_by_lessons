import React from "react";
import {addMessageAC, DialogInitialStateType} from "../../state/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType, store} from "../../state/redux-store";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {getDialogsPage} from "../../selectors/dialogs-selectors";

const state = store.getState();

type MapStateToPropsType = {
    dialogsPage: DialogInitialStateType
}

type MapDispatchToPropsType = {
    addMessageCallBack: (newMessageBody: string) => void
}

export type DialogPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: getDialogsPage(state),
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessageCallBack: (newMessageBody: string) => {
          dispatch(addMessageAC(newMessageBody))
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
                />
            </div>
        )
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(DialogsContainer)