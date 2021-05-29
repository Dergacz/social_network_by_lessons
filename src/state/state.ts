let renderThree = () => {

}

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
    if (state.profilePage.newPostText.trim() !== "") {
        state.profilePage.myPosts.push(newPost);
    }
    state.profilePage.newPostText = "";
    renderThree();
}

export const updateNewPostText = (textMessage: string) => {
    state.profilePage.newPostText = textMessage;
    renderThree();
}


export const addMessage = () => {
    const newMessage: MessagesDataType = {
        id: new Date().getTime(),
        message: state.dialogsPage.newMessageText
    };
    if (state.dialogsPage.newMessageText.trim() !== ""){
        state.dialogsPage.messages.push(newMessage);
    }
    state.dialogsPage.newMessageText = "";
    renderThree();
}

export const updateNewMessageText = (textMessage: string) => {
    state.dialogsPage.newMessageText = textMessage;
    renderThree();
}

export const subscribe = (observer: () => void) => {
    renderThree = observer;
}