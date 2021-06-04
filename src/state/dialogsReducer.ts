import {
    ActionsType,
    AddMessageActionType,
    UpdateNewMessageTextActionType
} from "./state";

const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

export type DialogsDataType = {
    id: number
    name: string
}

export type MessagesDataType = {
    id: number
    message: string
}

const initialState = {
    dialogs: [
        {id: 1, name: "Vasia"},
        {id: 2, name: "Sania"},
        {id: 3, name: "Kirill"},
        {id: 4, name: "Petia"},
    ] as DialogsDataType[],

    messages: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Kak sam?"},
    ] as MessagesDataType[],
    newMessageText: ""
}

export type DialogInitialStateType = typeof initialState;

export const dialogsReducer = (state: DialogInitialStateType = initialState, action: ActionsType): DialogInitialStateType => {
    switch (action.type) {
        case("ADD_MESSAGE"): {
            const newMessage: MessagesDataType = {
                id: new Date().getTime(),
                message: state.newMessageText
            };
            const stateCopy = {
                ...state,
                newMessageText: "",
                messages: [...state.messages, newMessage]
            }
            return stateCopy;
        }
        case ("UPDATE_NEW_MESSAGE_TEXT"): {
            const stateCopy = {
                ...state,
                newMessageText: action.updateTextMessage
            }
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addMessageAC = (messageText: string): AddMessageActionType => {
    return {
        type: ADD_MESSAGE,
        messageText
    }
}

export const updateNewMessageTextAC = (updateTextMessage: string): UpdateNewMessageTextActionType => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        updateTextMessage
    }
}
