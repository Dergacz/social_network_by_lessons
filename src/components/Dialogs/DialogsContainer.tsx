import React from "react";
import {addMessageAC, updateNewMessageTextAC} from "../../state/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    const addMessage = () => {
                        store.dispatch(addMessageAC(state.dialogsPage.newMessageText));
                    }

                    const onMessageText = (messageText: string) => {
                        store.dispatch(updateNewMessageTextAC(messageText));
                    }

                    return (
                        <Dialogs
                            addMessageCallBack={addMessage}
                            updateNewMessageCallBack={onMessageText}
                            message={state.dialogsPage.newMessageText}
                            dialogs={state.dialogsPage.dialogs}
                            messages={state.dialogsPage.messages}
                        />
                    )
                }
            }

        </StoreContext.Consumer>

    )
}

