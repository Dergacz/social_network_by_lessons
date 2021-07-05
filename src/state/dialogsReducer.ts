const ADD_MESSAGE = "ADD_MESSAGE";

type AddMessageActionType = {
    type: "ADD_MESSAGE"
    messageText: string
}


type ActionsType = AddMessageActionType

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
    ] as MessagesDataType[]
}

export type DialogInitialStateType = typeof initialState;

export const dialogsReducer = (state: DialogInitialStateType = initialState, action: ActionsType): DialogInitialStateType => {
    switch (action.type) {
        case(ADD_MESSAGE): {
            const newMessage: MessagesDataType = {
                id: new Date().getTime(),
                message: action.messageText
            };
            const stateCopy = {
                ...state,
                messages: [...state.messages, newMessage]
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

