import {renderThree} from "../render";

export type MyPostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogsDataType = {
    id: number
    name: string
}

export type MessagesDataType = {
    id: number
    message: string
}

export type ProfilePagePropsType = {
    myPosts: MyPostType[]
    newPostText: string
}

export type DialogsPropsType = {
    dialogs: DialogsDataType[]
    messages: MessagesDataType[]
    newMessageText: string
}

export type RootStateType = {
    profilePage: ProfilePagePropsType
    dialogsPage: DialogsPropsType
}


export let state: RootStateType = {
    profilePage: {
        myPosts: [
            {id: 1, message: "Hey, how are you?", likesCount: 15},
            {id: 2, message: "It's my first post.", likesCount: 10},
        ],
        newPostText: ""
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Vasia"},
            {id: 2, name: "Sania"},
            {id: 3, name: "Kirill"},
            {id: 4, name: "Petia"},
        ],

        messages: [
            {id: 1, message: "Hi!"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "Kak sam?"},
        ],
        newMessageText: ""
    }
};

export const addPost = () => {
    const newPost: MyPostType = {
        id: new Date().getTime(),
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.myPosts.push(newPost);
    state.profilePage.newPostText = "";
    renderThree(state);
}

export const updateNewPostText = (textMessage: string) => {
    state.profilePage.newPostText = textMessage;
    renderThree(state);
}


export const addMessage = () => {
    const newMessage: MessagesDataType = {
        id: new Date().getTime(),
        message: state.dialogsPage.newMessageText
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = "";
    renderThree(state);
}

export const updateNewMessageText = (textMessage: string) => {
    state.dialogsPage.newMessageText = textMessage;
    renderThree(state);
}
