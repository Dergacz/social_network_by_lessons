import {
    addMessageAC,
    DialogsDataType,
    dialogsReducer,
    MessagesDataType,
} from "./dialogsReducer";


test("Add message", () => {
    const startState = {
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

    const action = addMessageAC("Add message");

    const endState = dialogsReducer(startState, action);

    expect(endState.messages[3].id).toBeTruthy();
    expect(endState.messages.length).toBe(4);
    expect(endState.messages[3].message).toBe("Add message");
});
