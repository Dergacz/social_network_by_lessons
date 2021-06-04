import React from "react";
import {addMessageAC, DialogInitialStateType, updateNewMessageTextAC} from "../../state/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType, store} from "../../state/redux-store";

const state = store.getState();

type MapStateToPropsType = {
    dialogsPage: DialogInitialStateType
}

type MapDispatchToPropsType = {
    addMessageCallBack: () => void
    updateNewMessageCallBack: (textMessage: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
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

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

