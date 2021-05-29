
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

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: () => void
    addPost: () => void
    updateNewPostText: (textMessage: string) => void
    addMessage: () => void
    updateNewMessageText: (textMessage: string) => void
    subscribe: (observer: () => void) => void
}

export let store: StoreType = {
    _state: {
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
    },
    getState() {
        return this._state
    },
    _callSubscriber ()  {
    },
    addPost () {
        const newPost: MyPostType = {
            id: new Date().getTime(),
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        if (this._state.profilePage.newPostText.trim() !== "") {
            this._state.profilePage.myPosts.push(newPost);
        }
        this._state.profilePage.newPostText = "";
        this._callSubscriber();
    },
    updateNewPostText (textMessage: string) {
        this._state.profilePage.newPostText = textMessage;
        this._callSubscriber();
    },
    addMessage () {
        const newMessage: MessagesDataType = {
            id: new Date().getTime(),
            message: this._state.dialogsPage.newMessageText
        };
        if (this._state.dialogsPage.newMessageText.trim() !== ""){
            this._state.dialogsPage.messages.push(newMessage);
        }
        this._state.dialogsPage.newMessageText = "";
        this._callSubscriber();
    },
    updateNewMessageText (textMessage: string) {
        this._state.dialogsPage.newMessageText = textMessage;
        this._callSubscriber();
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

}
